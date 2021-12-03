import React, { Component } from 'react'

class About extends Component {

    render() {
        return (
            <div className="about-Container">
                <div className="about-header">
                    <img src= "https://blog.kissmyshoe.com/wp-content/uploads/2019/01/https-_hypebeast.com_image_2016_10_flight-club-nyc-store-expansion-1.jpg" alt="newyork"/>
                 </div>
            <div className="about-mission">
                <h1>Our Mission:</h1>
                <br />
                <p> We are looking to make positive change </p>
            </div>

            <hr /> <br />
            <h1>Locations:</h1>
            <br />
            <hr />
            <div className="about-newyork-p">
                <div className="about-newyork">
                    <div className="about-newyork-text-container">
                        <h1>New York</h1>
                        <br />
                        <p>Brand new location</p>
                    </div>
                    </div>
                <hr />

                <div className="about-la">
                    <div className="about-la-container">
                        <img src="https://i.ytimg.com/vi/iiAwWtqKMbs/maxresdefault.jpg" alt="los-angeles" />
                    </div>
                    <div className="about-la-text-container">
                    <h1>Los Angeles</h1>
                    <br />
                    <p>Other location</p>
                    </div>
                    </div>
                    <hr />

                </div>
                </div>
            

        )
    }
}

export default About