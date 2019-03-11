import React, { Component } from "react";
import * as $ from "axios";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        isSignup: false
    };

    changeHandler = (event) => {
        return this.setState({ [event.target.name]: event.target.value })
    }

    Signup = (event) => {
        event.preventDefault();
        this.setState({isSignup: true})
    }

    LoginButton = (event) => {
        event.preventDefault();
        $.post('/api/user/login', { username: this.state.username, password: this.state.password })
            .then((data) => {
                sessionStorage.setItem("token", data.data.token);
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
    return this.props.location.hash === "#register"
        
        ? <SignupForm changeHandler={this.changeHandler} SignupButton={this.SignupButton} Uservalue={this.state.username} Passvalue={this.state.password}/>
        : <LoginForm changeHandler={this.changeHandler} LoginButton={this.LoginButton} Uservalue={this.state.username} Passvalue={this.state.password} Signup={this.Signup}/>
    }
}