import React,{useState, useEffect} from "react";
import { Button, Container, Row, Nav } from "react-bootstrap";
import "./LandingStyles.css";

function LandingPage() {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUserInfo(userInfo);
  }, []);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Exps_Up</h1>
              <p className="subtitle">One Safe place for all your Exps_Up</p>
            </div>
            {!userInfo && (
              <div className="buttonContainer">
                <Nav.Link href={"/login"}>
                  <Button size="lg" className="landingbutton">
                    Login
                  </Button>
                </Nav.Link>
                <Nav.Link href={"/register"}>
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="landingbutton"
                  >
                    Signup
                  </Button>
                </Nav.Link>
              </div>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
