import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import { NavBar } from "./components/NavBar";
import { News } from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path={`/business`}
              element={
                <News pageSize={5} country={"in"} category={"business"} />
              }
            />
            <Route
              exact path="/entertainment"
              element={
                <News pageSize={5} country={"in"} category={"entertainment"} />
              }
            />

            <Route
              path="/general"
              element={
                <News pageSize={5} country={"in"} category={"general"} />
              }
            />
            <Route
              path="/health"
              element={<News pageSize={5} country={"in"} category={"health"} />}
            />
            <Route
              path="/science"
              element={
                <News pageSize={5} country={"in"} category={"science"} />
              }
            />
            <Route
              path="/sports"
              element={<News pageSize={5} country={"in"} category={"sports"} />}
            />
            <Route
              path="/technology"
              element={
                <News pageSize={5} country={"in"} category={"technology"} />
              }
            />
            <Route
              path="/everything"
              element={<News pageSize={5} country={"in"} category={""} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
