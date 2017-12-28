import React, { Component } from "react";
import LoginForm from "./LoginForm";
import {FormBtn} from "../Form";
import axios from "axios";
import API from "../../utils/API"

class ProfileBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            message: null
        }
    }

    componentDidMount() {
        this.getProfile()
    }

    getProfile() {
        API.getProfile()
        .then( response => {
            if (response.data.success){
              this.setState({ user: response.data.user })
            } else {
              this.setState({ user: null })
            }
          })
          .catch( error => {
              console.log('Error getting profile: ', error)
          })
    }

    logOut = () => {
        console.log('Logging out...')
        axios({
            method: 'get',
            url: '/auth/logout'
        })
        .then( response => {
            this.setState({ user: null, message: 'Logged out' })
        })
        .catch( error => {
            console.log(error)
        })
    }

    logIn = (email, password) => {
        console.log("Logging in...");
        axios({
             method: 'post',
             url: '/auth/login',
             data: {email: email, password: password},
            })
        .then( response => {
            console.log(response)
            if(response.data.success){
                this.getProfile()
            } else {
                this.setState({ message: response.data.message })
            }
        })
        .catch( error => {
            this.setState({ message: "Error logging in" })
        });
    }

    render() { 
    	let form;
    	let message;

        if (this.state.user) {
        	message = <li>Logged in as: {this.state.user.email}</li>
            form = <li><FormBtn onClick={this.logOut}>Log Out</FormBtn></li>
        } else {
        	message = <li>{this.state.message}</li>
            form = <li><LoginForm logIn={this.logIn}/></li>
        }

        return [message, form]
    }
}

export default ProfileBox