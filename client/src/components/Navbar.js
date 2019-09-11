import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo1.png'

function Navbar() {
  return (
    <nav className="navbar has-shadow is-spaced">
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <img src={Logo} alt="life to fit logo" width="75" />
            </Link>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
                <Link className="navbar-item" to="/">
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                    <span>Home</span>
                </Link>

                <Link className="navbar-item" to="/features">
                <span className="icon"><i className="fa fa-table"></i></span>&nbsp; Features
                </Link>
                <Link className="navbar-item" to="/pricing">
                    <span className="icon">
                        <i className="fas fa-money-check-alt"></i>
                    </span>
                    <span>Pricing</span>
                </Link>

                <Link className="navbar-item" to="/aboutus">
                <span className="icon"><i className="fa fa-info"></i></span>&nbsp;About us
                </Link>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <Link className="bd-tw-button button" data-sign-in="" data-social-action=""
                                to="/signin">
                                <span className="icon">
                                    <i className="fas fa-sign-in-alt"></i>
                                </span>
                                <span>
                                    Sign In
                                </span>
                            </Link>
                        </p>
                        <p className="control">
                            <Link className="button is-primary" to="/signup">
                                <span className="icon">
                                    <i className="fab fa-freebsd"></i>
                                </span>
                                <span>Try it for free</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
