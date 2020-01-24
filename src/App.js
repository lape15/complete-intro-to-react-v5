import React from "react";
import { Router, Link } from "@reach/router";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
const App = () => {
  return (
    <React.StrictMode>
      <div id="something">
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
