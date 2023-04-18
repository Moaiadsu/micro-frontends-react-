import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./MyNotes";

const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: remoteNotes</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
    <Routes>
      <Route path="/" Component={MyNotes} exact />
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
