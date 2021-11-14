import React from "react";
import * as Bootstrap from "react-bootstrap";

function Navbar(props) {
  const { clickHandler } = props;
  return (
    <div>
      <Bootstrap.Navbar bg="light" expand="lg">
        <Bootstrap.Container>
          <Bootstrap.Navbar.Brand href="#home">
            E-commerce
          </Bootstrap.Navbar.Brand>
          <Bootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Bootstrap.Navbar.Collapse id="basic-navbar-nav">
            <Bootstrap.Nav className="me-auto">
              <Bootstrap.Nav.Link href="#home" onClick={clickHandler}>
                Home
              </Bootstrap.Nav.Link>

              <Bootstrap.NavDropdown title="Category" id="basic-nav-dropdown">
                <Bootstrap.NavDropdown.Item
                  href="#action/3.1"
                  onClick={clickHandler}
                >
                  Fruits
                </Bootstrap.NavDropdown.Item>
                <Bootstrap.NavDropdown.Item
                  href="#action/3.2"
                  onClick={clickHandler}
                >
                  Vegetables
                </Bootstrap.NavDropdown.Item>
              </Bootstrap.NavDropdown>
            </Bootstrap.Nav>
          </Bootstrap.Navbar.Collapse>
        </Bootstrap.Container>
      </Bootstrap.Navbar>
    </div>
  );
}

export default Navbar;
