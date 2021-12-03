import React, { Component } from 'react'
import ItemContainer from './ItemContainer'


class Home extends Component {

    render() {
        return (
            <div>
                <ItemContainer setCurrentItem={this.props.currentItem} loggedIn={this.props.loggedIn} addToCart={this.props.addToCart} items={this.props.items}/>
            </div>
        )
    }
}

export default Home