import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./formInput.css";
import Alert from "react-bootstrap/Alert";

export const FormInput = ({ getWeather, error }) => {
  return (
    <div className="formInput">
      <Container>
        <Row>
          <Col>{error ? errorMsg() : null}</Col>
        </Row>
        <Row>
          <Form onSubmit={getWeather} className="d-flex">
            <Col sm={5}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="city"
                  autoComplete="off"
                />
              </Form.Group>
            </Col>
            <Col sm={5}>
              <Form.Group className="mb-3 ms-3">
                <Form.Control
                  type="text"
                  name="country"
                  placeholder="country"
                  autoComplete="off"
                />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Button
                variant="secondary"
                size="sm"
                type="submit"
                className="custom-btn ">
                Get Weather
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

const errorMsg = () => {
  return (
    <Alert variant="danger">
      <h4>Please enter city and country</h4>
    </Alert>
  );
};
