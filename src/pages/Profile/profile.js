import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Panel from "../../components/ProfPanel";
import './profile.css';

class Profile extends Component {
    state = {
      banana: 'pajama',
      user: null
    };

    componentDidMount() {
        this.getProfile();
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

    render() { 
      const user = this.state.user
      if (user) {
        return (
          <div>Profile for { user.email }</div>
        )
      } else {
        return (
          <div>You must be logged in to view/edit profile</div>
        )
      }
    }
}

export default Profile;
