import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Navbar, Container} from "react-bootstrap";
import { useSelector } from "react-redux";
import "./index.css";

function LodgerNavigation() {
  const { currentUser } = useSelector((state) => state.usersReducer);
  const { pathname } = useLocation();
  return (
    <div>
        <div className="mx-auto p-2 w-50 border-start border-end border-bottom border-dark-subtle proj-bg-color-nav">
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg bg-body-tertiary proj-padding-nav">
                <Container className="container-fluid proj-color-nav">
                  <a className="navbar-brand proj-font-nav" href="/">
                    <img src="../../images/Lodger-logos_black.png" alt="Logo" width="100" height="100" className="d-inline-block" />
                    Lodger
                  </a>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link
                    to={`/Lodger/Home`}
                    style={{ textDecoration: 'none' }}
                    className={`list-group-items ${pathname.includes(`Home`) && "active"}`}>
                      <li className="nav-item">
                        <a className="nav-link proj-font-nav" href="/Lodger/Home">Home</a>
                      </li>
                    </Link>
                    <Link
                    to={`/Lodger/Login`}
                    style={{ textDecoration: 'none' }}
                    className={`list-group-items ${pathname.includes(`Login`) && "active"}`}>
                      <li className="nav-item">
                        <a className="nav-link proj-font-nav" href="/Lodger/Login">Login</a>
                      </li>
                    </Link>
                    {currentUser && (
                    <>
                    <Link
                    style={{ textDecoration: 'none' }}
                    to={`/Lodger/Profile/${currentUser._id}`}
                    className={`list-group-items ${pathname.includes(`Profile`) && "active"}`}>
                      <li className="nav-item">
                        <a className="nav-link proj-font-nav" href="/Lodger/Profile">Profile</a>
                      </li>
                    </Link>
                    </>
                    )}
                    <Link
                    to={`/Lodger/Search`}
                    style={{ textDecoration: 'none' }}
                    className={`list-group-items ${pathname.includes(`Search`) && "active"}`}>
                      <li className="nav-item">
                        <a className="nav-link proj-font-nav" href="/Lodger/Home">Search</a>
                      </li>
                    </Link>
                    </ul>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </div>
  );
}
export default LodgerNavigation;