import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Form>
          <Row>
            <Col xs={9}>
              <Form.Control placeholder="Search for new images..." />
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default Search;
