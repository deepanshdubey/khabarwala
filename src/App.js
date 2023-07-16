import "./App.css";
import React from "react";
import NavBar from"./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'; 
import { useState } from "react";

const App = () => {

  const pageSize = 11;
  const apiKey = process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0);



    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={progress}
      /> 

          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress = {setProgress} key="general" pageSize = {pageSize} country="in" apiKey = {apiKey} category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News setProgress = {setProgress} key="business"  pageSize = {pageSize} country="in" apiKey = {apiKey} category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress = {setProgress} key="entertainment" pageSize = {pageSize} country="in" apiKey = {apiKey} category="entertainment" />
              }
            />
            <Route
              exact
              path="/health"
              element={<News setProgress = {setProgress} key="health" pageSize = {pageSize} country="in" apiKey = {apiKey} category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News setProgress = {setProgress} key="science" pageSize = {pageSize} country="in" apiKey = {apiKey} category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress = {setProgress} key="sports" pageSize = {pageSize} country="in" apiKey = {apiKey} category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News setProgress = {setProgress} key="technology" pageSize = {pageSize} country="in" apiKey = {apiKey} category="technology" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App
