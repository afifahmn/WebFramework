import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import HelloComponent from "./component/HellomComponent";
import StateFullComponent from "./container/StateFullComponent";

ReactDOM.render(<HelloComponent />, document.getElementById("root"));
// ReactDOM.render(<StateFullComponent />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
