import React, { Component } from "react";
import * as $ from "axios";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

export default class Login extends Component {
    state = {
        username: "",
        password: "",
    };

    changeHandler = (event) => {
        return this.setState({ [event.target.name]: event.target.value })
    }

    LoginButton = (event) => {
        event.preventDefault();
        $.post('/api/user/login', { username: this.state.username, password: this.state.password })
            .then((data) => {
                sessionStorage.setItem("authorization", data.data.token);
                this.setState({ username: '', password: '' })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    SignupButton = (event) => {
        event.preventDefault();
        $.post('/api/user/signup', { username: this.state.username, password: this.state.password })
            .then((data) => {
                this.setState({ username: '', password: '' });
            })
            .catch((error) => {
                console.log(error.message)
            })

    }

    render() {

        return <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Welcome to HotdogSpaceship</h1>
                <LoginForm changeHandler={this.changeHandler} LoginButton={this.LoginButton} Uservalue={this.state.username} Passvalue={this.state.password} />
                <SignupForm SignupButton={this.SignupButton} />
            </div>
        </div>


    }
}