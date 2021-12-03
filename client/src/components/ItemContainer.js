import React, { Component } from 'react';
import ItemCard from './ItemCard'

class ItemContainer extends Component {

    render() {
        return(
            <div className="item-container">
                {this.props.items.map((item) => <ItemCard setCurrentItem={this.props.setCurrentItem} loggedIn={this.props.loggedIn} addToCart={this.props.addToCart} key={item.id} item={item}/>)}
            </div>
        )
    }
}

export default ItemContainer 