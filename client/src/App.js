import './App.css';
import React, { Component } from "react";
import { BroswerRouter as Router, Route, Redirect } from 'react-router-dom';
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
    loggedIn: false,
    items: [],
    currentCart: [],
    cartItems: [],
    itemInfo: "",
    currentItem: {}
  }

setCurrentUser = (user) => {
  console.log(user)
  this.setState({
    user: user,
    loggedIn: true,
    currentCart: [...user.cart.items]

  })
}

logOut = () => {
  this.setState({
    user: {},
    loggedIn: false,
    currentCart: []
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
  fetch("http://localhost:3000/items")
  .then(res => res.json())
  .then(itemData => this.setState({ items: itemData }))

  fetch("http://localhost:3000/cart_items")
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
      <h3> Welcome back, {this.state.user.username}!</h3>  
      :
      null
}
</div>
  )
    }
  
    addToCart = (item) => {
      let a = this.state.currentCart.map(test => test.name === item.name)

      if (a.includes(true)) {
        let updateCartItem = this.state.cartItems.find(cartItem => cartItem.cart_id === this.state.user.cart.id && cartItem.item_id === item.id)
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
        this.setState({ currentCart: [...this.state.currentCart, item]})

        let newItem = {
          cart_id: this.state.user.cart.id,
          item_id: item.id,
          quantity: 1
        }

        let reqPackage = {}
        reqPackage.headers = { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}` }
        reqPackage.method = "POST"
        reqPackage.body = JSON.stringify(newItem)

        fetch("http://localhost:3000/cart_items", reqPackage)
        .then(res => res.json())
        .then(newCartItem => this.setState({ cartItems: [...this.state.cartItems, newCartItem]}))
      }
      <Redirect to={"/cart"} />
    }

      removeFromCart = 

}


export default App;
