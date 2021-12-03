//  import React, { useState } from 'react';
//  import { Navigate } from 'react-router-dom';

//  function CartItem() {
//      const [navigate, setNavigate] = useState(false);
//      const [newQuantity, setNewQuantity] = useState(0);

//  };

//  const handleChange = event => {
//     setName(event.target.value);
//  };


import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class CartItem extends Component {

    state = {
        navigate: false,
        newQuantity: 0
    }


    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ 
            [name]: value
        })
    }

    quantity = () => {
        let updateCartItem = this.props.cartItems.find(cartItem => cartItem.cart_id === this.props.user.cart.id && cartItem.item_id === this.props.item.id)
        return (
            <h4 className="cart-quantity">Quantity:
            <form onSubmit={(e) => this.updateQuantity(e, this.props.item, this.state.newQuantity)}>
                <div>
                    <input className="update-cart-field" onChange={this.handleChange} type="number" id="quantity" name="quantity" min="0" max="100" step="1" value={parseInt(updateCartItem.quantity)}/>
                </div>
                <div>
                    <input className="update-cart-quantity" type="submit" value="Update Quantity" />
                </div>
            </form>
            </h4>

        )
    }


    updateQuantity = (e, item, quantity) => {
        e.preventDefault()
        console.log(e.target.value, item, quantity)
    }

    handleClick = () => {
        this.props.setCurrentItem(this.props.item)
        this.setState({ navigate: true })
    }

    render() {

        return (
            this.state.navigate ? 
            <Navigate to={`item/${this.props.item.id}`} />
            :
            <div className="cart-card" >
                <img className="cart-link item-image" onClick={() => this.handleClick()} src={this.props.item.image} alt={this.props.item.name + "image"} />
                <h2 className="cart-link cart-item-name" onClick={() => this.handleClick()}>{this.props.item.name}</h2>
                <h3 className="cart-cost">{"$" + this.props.item.cost}</h3>
                {this.quantity()}
                <button className="item-button" onClick={() => this.props.removeFromCart(this.props.item)}>Remove from Cart</button>             
            </div>

            )
        }
    }

export default CartItem;

