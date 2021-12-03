import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';


class ItemCard extends Component {

    state = {
        navigate: false

    }


    handleAddToCart = () => {
        this.props.loggedIn ?
        this.props.addToCart(this.props.item) 
        :
    
        alert("Please log in or create an account to add to your cart!")

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
            <div className="card" >
                <div onClick={() => this.handleClick()}>
                    <img src={this.props.item.image} alt={this.props.item.name + "image"} className="item-image" />
                    <br /><br />
                    <h2 className="item-name">{this.props.item.name}</h2>
                    <br />
                    <h3>{"$" + this.props.item.cost}</h3>
                    <br />
                </div>
                <button className="item-button" onClick={() => this.handleAddToCart()}>Add to Cart</button>
            </div>
        )


    }

}

export default ItemCard;