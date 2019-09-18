import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
import "../assets/css/style.css";
import Logo from "../assets/images/logo1.png";

function Navbar(props) {
  const { authenticated } = props.authenticated;

  return (
    <nav className='navbar has-shadow is-spaced'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <img src={Logo} alt='life to fit logo' width='75' />
        </Link>

        <label
          role='button'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          htmlFor='nav-toggle-state'
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </label>
      </div>
      <input type='checkbox' id='nav-toggle-state' />
      <div id='navbarExampleTransparentExample' className='navbar-menu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/'>
            <span className='icon'>
              <i className='fas fa-home'></i>
            </span>
            <span>Home</span>
          </Link>
          {props.user.userType === "Trainee" ?
          (<Link className='navbar-item' to='/ourtrainer'>
            <span className='icon'>
              <i className='fa fa-table'></i>
            </span>
            &nbsp; Trainers
          </Link>) :("")}

          <Link className='navbar-item' to='/pricing'>
            <span className='icon'>
              <i className='fas fa-money-check-alt'></i>
            </span>
            <span>Pricing</span>
          </Link>

          <Link className='navbar-item' to='/aboutus'>
            <span className='icon'>
              <i className='fa fa-info'></i>
            </span>
            &nbsp;About us
          </Link>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field is-grouped'>
              <div className='control'>
                {!authenticated ? (
                  <Link
                    className='bd-tw-button button'
                    data-sign-in=''
                    data-social-action=''
                    to='/signin'
                  >
                    <span className='icon'>
                      <i className='fas fa-sign-in-alt'></i>
                    </span>
                    <span>Sign In</span>
                  </Link>
                  ) : ("" )}
                  </div>
                  <div>
                  {authenticated ? (
                  <Link className='navbar-item' to={props.user.userType === "Trainer" ? '/trainer-profile' : '/profile'}>
                  Welcome {props.user.name}! &nbsp;
                    <figure className='image is-24x24'>
                      <img
                        className='is-rounded'
                        src={props.user.profileImageUrl}
                        alt='account'
                      />
                    </figure>

                  </Link>) : ("")}
                  </div>

                  {/* <div>
                  {props.user.userType === "Trainer" ? (<Link className='navbar-item' to='/trainer-profile'>
                  Welcome {props.user.name}! &nbsp;
                    <figure className='image is-24x24'>
                      <img
                        className='is-rounded'
                        src={props.user.profileImageUrl}
                        alt='account'
                      />
                    </figure>

                  </Link>): ("")}

                  {props.user.userType === "Trainee" ? (<Link className='navbar-item' to='/profile'>
                  Welcome {props.user.name}! &nbsp;
                    <figure className='image is-24x24'>
                      <img
                        className='is-rounded'
                        src={props.user.profileImageUrl}
                        alt='account'
                      />
                    </figure>

                  </Link>): ("")}

                  </div> */}

                {/* )} */}

              <div className='control'>
                {!authenticated ? (
                  <Link className='button is-primary' to='/signup'>
                    <span className='icon'>
                      <i className='fab fa-freebsd'></i>
                    </span>
                    <span>Try it for free</span>
                  </Link>
                ) : (
                  <Link
                    className='bd-tw-button button'
                    data-sign-in=''
                    data-social-action=''
                    onClick={props.logout}
                    to='/'
                  >
                    <span className='icon'>
                      <i className='fas fa-sign-out-alt'></i>
                    </span>
                    <span>Sign Out</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
