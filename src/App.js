import React, { Component } from "react";
import movies from "./components/movies";
import categorie from "./components/categorie";
import "./App.css";
import Navbar from "./components/navbar";
import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col-8 offset-2">
            <Navbar />
          </div>
        </header>
        <section className="row">
          <div className="col-8 offset-2">
            <Route path="/categorie" component={categorie} />
            <Route path="/movies/:nom" component={movies} />
            <Route path="/movies" component={movies} />
            <Route path="/" exact component={movies} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
