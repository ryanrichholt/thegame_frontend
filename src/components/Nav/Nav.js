import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Home
        </a>
        <a href="/leaderboard" className="navbar-brand">
          Leaderboard
        </a>
        <a href="/profile" className="navbar-brand">
          Profile
        </a>
      </div>
    </div>
  </nav>;

export default Nav;
