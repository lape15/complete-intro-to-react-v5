// mostly codes from react doc

import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    redirect: false
  };
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentWillCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({
          redirect: true
        }),
          5000;
      });
    }
  }
  render() {
    if (this.state.redirect) {
      <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to homepage or wait five seconds
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
