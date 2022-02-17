import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
    <>
      <div>This is the homepage</div>;
      <Link to="/signup"> Sign Up</Link>
    </>

    )
  }
}
