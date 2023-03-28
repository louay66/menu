import React, { useState } from "react";
import { Container, Row, Nav, Navbar, Form } from "react-bootstrap";

const NevBar = ({ filterBySearch }) => {
  const [search, setSearch] = useState("");
  const OnSearch = () => {
    filterBySearch(search);
    setSearch("");
  };

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">New Restaurant</div>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search ..."
                className="mx-2"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <button onClick={() => OnSearch()} className="btn-search">
                Search
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NevBar;
