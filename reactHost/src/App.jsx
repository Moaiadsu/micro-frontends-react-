import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import "./bootstrap.min.css";
import "./index.scss";
import LoginScreen from "remoteLogin/LoginScreen";
import RegisterScreen from "remoteLogin/RegisterScreen";
import Header from "./components/Header";
import MyNotes from "remoteNotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={HomeScreen} exact />
        <Route path="/login" Component={LoginScreen} exact />
        <Route path="/register" Component={RegisterScreen} exact />
        <Route path="/mynotes" Component={MyNotes} exact />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
