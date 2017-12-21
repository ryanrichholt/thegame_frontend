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
    name: [],
    email: "",
    score: "",
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, name: "", email: "", score: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      
      
      <Container fluid>
      <div className="video-background">
      <div className="video-foreground">
        <iframe src="https://www.youtube.com/embed/y2RVEK8XkFk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=y2RVEK8XkFk" frameBorder="0" allowFullScreen></iframe>
       
        </div>
      </div>
        <Row>
          <Col size="md-12">
          <h1>Profile</h1>
          </Col>
        </Row>
        <Panel />
        
        
      </Container>
      
    );
  }
}

export default Profile;
