import React, { Component } from "react";
export default class Spinner extends Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          margin: "auto",
          height: "100vh",
          justifyContent: "center",
          // marginTop: "12%",
          alignItems: "center",
        }}
      >
        <img src="/loading.gif" alt="loading..." style={{}} />
      </div>
    );
  }
}
