import React, { Component } from 'react';
import CartItem from './CartItem';
import { Navigate } from 'react-router-dom'

class Cart extends Component {


    calculateTotal = () => {
        
        let newTotal = 0
        this.props.myCart.map ( item => {
            let cartItem = this.props.cartItems.find(cartItem => cartItem.cart_id === this.props.user.cart.id && cartItem.item_id === item.id)
            let quantity = cartItem.quantity
            let subTotal = parseFloat(item.cost) * quantity
            newTotal += subTotal 
        })

        newTotal = (Math.round(newTotal * 100) / 100).toFixed(2)
        return newTotal
    }

    render() {
        return (
            <div className="cart-container">
                <h1 className="cart-title">My Shopping Cart</h1>
                {this.props.loggedIn ?
                this.props.myCart.map(item => <CartItem updateQuantity={this.props.updateQuantity} setCurrentItem={this.props.setCurrentItem} user={this.props.user} cartItems={this.props.cartItems} removeFromCart={this.props.removeFromCart} key={item.id} item={item} />) 
           :
            (
                alert("Please log in or sign up for an account to see your cart"),
                <Navigate to="/login"/>
            )
            }
            <h2 className="cart-total">Total: ${this.calculateTotal()}</h2>
            
            </div>
        )
    }

}

export default Cart 