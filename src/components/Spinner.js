import React, { Component } from "react";
const Spinner = () => {
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
export default Spinner
