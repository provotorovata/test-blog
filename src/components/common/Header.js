import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../logo.jpg";
import { Link } from "react-router-dom";

const Header = () => (
  <Container style={{ backgroundColor: "#FFC300", height: "123px" }}>
    <Row>
      <Col xs={3}>
        <Link to={"/"}>
          <img alt="" src={logo} className="d-inline-block align-top" />
        </Link>
      </Col>
      <Col>
        <Row style={{ backgroundColor: "#81F79F", height: "100px" }}>
          Название
        </Row>
        <Row style={{ backgroundColor: "#A9F5BC" }}>
          Здоровье и красота тестно связаны друг с другом
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Header;
