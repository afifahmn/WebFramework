import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SubHeader from "./SubHeader.js";

class Header extends Component {
  render() {
    return (
      <div>
        <center>
          <br></br>
          {/* <h2>Biodata</h2> */}
          <SubHeader />
          {/* <h2>Afifah Millatina N</h2> */}
        </center>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <center>
        <Header />
        {/* <h1>TI-3G</h1> */}
      </center>
    </div>
  );
}
export default App;
