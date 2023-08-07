import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import blogIcon from "../../img/noun-blog-3482313.svg";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
        ata-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1" to="/">
            <img
              src={blogIcon}
              width="30"
              height="26"
              className="d-inline-block align-text-center"
            />
            News Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/posts">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/saved-posts">
                  Saved Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
