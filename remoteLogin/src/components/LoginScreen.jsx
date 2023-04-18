import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import MainScreen from "./MainScreen";
import Loading from "./Loading";
import "../components/Screen.css";
import { useState } from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUser(userInfo);
    navigate("/login");
    if (user) {
      navigate("/");
    }
  }, [user]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      const userInfo = localStorage.getItem("userInfo");
      setUser(userInfo);

      console.log("LocalStorage", userInfo);
    } catch (err) {
      setError(err.response.data.message);
    }
    setLoading(false);
  };

  return (
    <MainScreen className="mb-5" title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept terms of agreement" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
