import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Posts from "./components/posts/Posts";
import HeaderNavigation from "./components/common/HeaderNavigation";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/common/Header";
import RightNavBar from "./components/common/RightNavBar";
import AddNewTag from "./components/common/AddNewTag";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HeaderNavigation />
      <Container>
        <Row>
          <Col sm={3}>
            <RightNavBar />
            <AddNewTag />
          </Col>
          <Col />
        </Row>
      </Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
