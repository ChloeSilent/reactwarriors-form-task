import React from "react";
import Basic from "./Basic";

export default class App extends React.Component {
  render() {
    return (
      <div className="form-container card">
        <form className="form card-body" >
          <Basic/>
        </form>
      </div>
    );
  }
}
