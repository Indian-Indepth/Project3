import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

function BottomNavTrainer() {
  return (

    <nav className='is-fixed-bottom navbar has-shadow'>
      <div className='container'>
        <label htmlFor='menu-toggle' className='nav-toggle'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <input type='checkbox' id='menu-toggle' className='is-hidden' />
        <div className='has-text-centered box nav-menu'>
          <Link to="/trainer-profile" className={
              window.location.pathname === "/trainer-profile" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
            }>
            <span className='icon'>
            <i className="fas fa-user"></i>
            </span>{"  "}

          </Link>
          <Link to="/trainer-message" className={
              window.location.pathname === "/trainer-message" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
            }>
            <span className='icon'>
            <i class="fas fa-envelope-open-text"></i>
            </span>{"  "}

          </Link>
          <Link to="/trainer-editprofile" className={
              window.location.pathname === "/trainer-editprofile" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
            } >
            <span className='icon'>
            <i className="fas fa-user-edit"></i>
            </span>{"  "}

          </Link>
          <Link to="/yourclient" className={
              window.location.pathname === "/yourclient" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
            }>
            <span className='icon'>
            <i className="fas fa-chalkboard-teacher"></i>
            </span>{"  "}

          </Link>

          <Link to="/trainer-payments" className={
              window.location.pathname === "/trainer-payments" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
            }>
            <span className='icon'>
            <i className="fas fa-file-invoice"></i>
            </span>{"  "}

          </Link>
        </div>
      </div>
    </nav>
  );
}

export default BottomNavTrainer;
