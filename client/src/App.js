import './App.css';
import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import ItemInfo from './components/ItemInfo'

class App extends Component {
  state = {
    user: {},
    loggedIn: true,
    items: [],
    myCart: [],
    cartItems: [],
    itemInfo: "",
    currentItem: {}
  }

setCurrentUser = (user) => {
  console.log(user)
  this.setState({
    user: user,
    loggedIn: true,
    myCart: [...user.cart.items]

  })
}

logOut = () => {
  this.setState({
    user: {},
    loggedIn: false,
    myCart: []
  })
  localStorage.token = ""
}

componentDidMount = () => {
  let token = localStorage.token
  if (typeof token!== "undefined" && token.length >1) {
    this.tokenLogin(token)
  } else {
    console.log("No token found, try logging in!")
  }

  fetch("/items")
  .then(res => res.json())
  .then(itemData => this.setState({ items: itemData }))

  fetch("/cart_items")
  .then(res => res.json())
  .then(cartItemData => this.setState({ cartItems: cartItemData }))

}

tokenLogin = (token) => {
  fetch("http://localhost:3000/auto_login", { 
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"

  },
  body: JSON.stringify({ token: token })

  })
  .then(res => res.json())
  .then(user => this.setCurrentUser(user))
}

displayGreeting = () => {
  return(
    <div className="greeting">
      {this.state.loggedIn ? 
      <h3> Hello, {this.state.user.username}!</h3>  
      :
      null
}
</div>
  )
    }
  
    addToCart = (item) => {
      let a = this.state.myCart.map(cartname => cartname.name === item.name)
      console.log(a)
      if (a.includes(true)) {
        let updateCartItem = this.state.cartItems.find(cartItem => cartItem.cart_id === this.state.user.cart.id && cartItem.item_id === item.id)
        console.log(updateCartItem)
        //let updatequantities = updateCartItem?.quantity
       let updateQuantity = updateCartItem.quantity += 1
        let sendItem = {
          "quantity": updateQuantity
        }

        let reqPackage = {}
        reqPackage.headers = { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}`}
        reqPackage.method = "PATCH"
        reqPackage.body = JSON.stringify(sendItem)

        fetch("http://localhost/cart_items/" + updateCartItem.id, reqPackage)
        .then(res => res.json())


      } else {
        this.setState({ myCart: [...this.state.myCart, item]})

        let newItem = {
          cart_id: this.state.user.cart?.id,
          item_id: item.id,
          quantity: 1,
          
        }

        
        let reqPackage = {}
        reqPackage.headers = { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}` }
        reqPackage.method = "POST"
        reqPackage.body = JSON.stringify(newItem)

        fetch("/cart_items", reqPackage)
        .then(res => res.json())
        .then(newCartItem => this.setState({ cartItems: [...this.state.cartItems, newCartItem]}))
      }
      <Navigate to={"/cart"} />
    }

      removeFromCart = (oldItem) => {
        let newCart = this.state.myCart.filter(item => item !== oldItem)
        this.setState({ myCart: newCart })
        let delCartItem = this.state.cartItems.find(cartItem => cartItem.cart_id === this.state.user.cart.id && cartItem.item_id === oldItem.id)
        let newCartItems = this.state.cartItems.filter(cartItem => cartItem !== delCartItem)
        this.setState({ cartItems: newCartItems })

        fetch("http://localhost/cart_items" + delCartItem.id, {
          method: "DELETE"
        })
      }

      setCurrentItem = (item) => {
        this.setState({ currentItem: item })
      }

      render() {
        return (
          <div>
            <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Air-Jordan-Symbol.png" alt="shoe" width="500" />
            <div className="shoe-border"/>
            <Navbar logOut={this.logOut} loggedIn={this.state.loggedIn} />
              {this.displayGreeting()}
         
          
            <Routes>
              <Route exact path="/" element={<Home setCurrentItem={this.setCurrentItem} loggedIn={this.state.loggedIn} addToCart={this.addToCart} items={this.state.items} />} />
              <Route exact path="/about" element={<About />} />

              {/* <Route exact path="/login">
                {this.state.loggedIn ?
                <Navigate to="/" />
                :
                <Login  setCurrentUser={this.setCurrentUser} tokenLogin={this.tokenLogin} />}
                </Route>  
              
              <Route exact path="/signup">
                {this.state.loggedIn ?
              <Navigate to="/" />
              :
              <Signup />}
              </Route>  */}


            <Route exact path="/cart" element={ <Cart updateQuantity={this.updateQuantity} setCurrentItem={this.setCurrentItem} loggedIn={this.state.loggedIn} user={this.state.user} cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} myCart={this.state.myCart} />} />

            {/* <Route path="/item/" render={routerProps => <ItemInfo {...routerProps} item={this.state.currentItem} addToCart={this.addToCart} loggedIn={this.state.loggedIn} />} /> */}
            
            </Routes>    
            <div className="footer">

            </div>
          </div>
        );
      }
}


export default App;
