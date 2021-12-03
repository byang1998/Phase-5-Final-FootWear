import React, { Component } from 'react';
import '../App.css';

class ItemInfo extends Component {
    state ={
        itemId: this.props.location.pathname.split("/").pop(),
        item: {}
    }

    handleAddToCart = () => {
        console.log(this.props.loggedIn)
        this.props.loggedIn?
        this.props.addToCart(this.state.item)
        :
        alert("Please log in or create an account to add to your cart!")
    }

    render() {
        return (
            <div className="show">
                <div className="detail-img-container">
                <img className="detail-img" src={this.props.item.image} alt={this.props.item.name + "image"} />
                
                </div>
                <div classname="detail-text-container">
                    <h1 className="detail-name">{this.props.item.name}</h1>
                    <h2 className="detail-cost">{"$" + this.props.item.cost}</h2>
                    <br />
                    <p className="detail-description">{this.props.item.description}</p>
                <br />
                <button className="detail-button" onClick={() => this.handleAddToCart()}>Add to Cart</button>
                <br />
                <br />
               

                </div>

            </div>
        )
    }
}
export default ItemInfo