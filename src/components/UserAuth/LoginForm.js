import React, { Component } from "react";
import {Input, FormBtn} from "../Form";
import axios from "axios";

class LoginForm extends Component {
	state = {
		email: null,
		password: null,
	}

	handleEmailChange = event => {
   		this.setState({email: event.target.value});
	}

	handlePasswordChange = event => {
	   this.setState({password: event.target.value});
	}

    handleLoginSubmit = (event) => {
        event.preventDefault();
        this.props.logIn(this.state.email, this.state.password)
    }

  //   handleLoginSubmit = (event) => {
  //   	event.preventDefault();
  //   	console.log("Logging in...");
   
  //   	axios({
		// 	method: 'post',
		// 	url: '/auth/login',
		// 	data: this.state,
		// })
	 //  	.then( (response) => {
  //           console.log(response)
  //           if(response.data.success){
  //               this.props.doneLogin()
  //           } else {
  //               this.props.loginFail(response.data.message)
  //           }
	 //  	})
  // 		.catch(function (error) {
		//     console.log(error);
	 //  	});
  //   }

    render() { return (
		<div className="form-inline">
            <div>{this.props.message}</div>
	        <form>
			  <Input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" id="login-email" placeholder="Email" onChange={this.handleEmailChange}></Input>
			  <Input className="form-control mb-2 mr-sm-2 mb-sm-0" type="password" id="login-password" placeholder="Password" onChange={this.handlePasswordChange}></Input>
	          <FormBtn type="submit" id="login-submit" onClick={this.handleLoginSubmit}>Log In</FormBtn>
	        </form>
		</div>
	)}
}

export default LoginForm