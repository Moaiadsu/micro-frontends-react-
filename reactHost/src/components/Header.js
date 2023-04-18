import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Search from "remoteSearch/Search";

const Header = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUser(userInfo);
  }, [user]);

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">Exps_Up</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {user && (
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Search />
            </Nav>
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">My_Exps</Nav.Link>
              <NavDropdown title="My_Name" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">My_Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    if (user) {
                      localStorage.removeItem("userInfo");
                      navigate("/");
                    }
                  }}
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
