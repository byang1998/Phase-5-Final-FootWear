import React, { Component } from 'react';
import { Navigate, Link } from "react-router-dom"

class Signup extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        created: false,
        errorMessage: ""

    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    createUser = (event) => {
        event.preventDefault()
        event.target.reset()

        const { username, email, password } = this.state

        let user = {
            username: username,
            email: email,
            password: password
        }

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user })
        })
        .then(r => r.json())
        .then(r => {
            if (r.status === "created") {
                this.setState({ created: true, errorMessage: "" })
            }
        })
        .catch(r => this.setState({ errorMessage: "Your signup is invalid"}))
    }

    render() {
        return (
            <div>
                {this.state.created ? (
                    <Navigate to="/login" />
                ) : (
                    <div className="signup-container">
                        <div><p>{this.state.errorMessage}</p></div>
                        <div className="signup-card">
                            <form onSubmit={this.createUser}>
                                <h1>Please join us!</h1>
                                <br />
                            <div>
                                <input className="signup-form-field" onChange={this.handleChange} type="text" name="username" placeholder="Username" />
                            </div>
                            <div>
                                <input className="signup-form-field" onChange={this.handleChange} type="text" name="email" placeholder="Email" />
                            </div>
                            <div>
                                <input className="signup-form-field" onChange={this.handleChange} type="text" name="password" placeholder="Password" />
                            </div>
                        <input className="signup-form-submit" type="submit" value="Sign Up" />
                            </form>
                        <br />
                        <p>Already signed up? <Link to="/Login">Please log in!</Link></p>
                        </div>
                    </div>
                    )}
                </div>
            )        
               }
            }

            export default Signup;
