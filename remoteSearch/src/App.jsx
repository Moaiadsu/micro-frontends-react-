import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Search from "./Search";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remoteSearch</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Search />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
