import React from "react";
import ReactDOM from "react-dom";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import MainScreen from "./components/MainScreen";

const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: remote Login</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
    <Routes>
      <Route path="/" Component={MainScreen} exact />
      <Route path="/login" Component={LoginScreen} exact />
      <Route path="/register" Component={RegisterScreen} exact />
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
