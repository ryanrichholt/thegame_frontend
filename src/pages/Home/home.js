import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
  state = {

  };
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <div class="video-background">
          <div class="video-foreground">
            <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
          </div>
          </div>
            <Jumbotron>
              <h1>Welcome to The Game App</h1>
            </Jumbotron>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
