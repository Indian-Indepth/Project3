import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

function BottomNavTrainee() {
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
          <Link to="/profile" className={
              window.location.pathname === "/profile" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
            }>
            <span className='icon'>
            <i className="fas fa-user"></i>
            </span>{"  "}

          </Link>
          <Link to="/message" className={
              window.location.pathname === "/message" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
            }>
            <span className='icon'>
            <i className="fas fa-envelope-open-text"></i>
            </span>{"  "}

          </Link>
          {/* <Link to="/editprofile" className={
              window.location.pathname === "/editprofile" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
            } >
            <span className='icon'>
            <i className="fas fa-user-edit"></i>
            </span>{"  "}

          </Link> */}
          <Link to="/yourtrainer" className={
              window.location.pathname === "/yourtrainer" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
            }>
            <span className='icon'>
            <i className="fas fa-chalkboard-teacher"></i>
            </span>{"  "}

          </Link>

          <Link to="/progress" className={
              window.location.pathname === "/progress" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
            }>
            <span className='icon'>
            <i className="fas fa-chart-line"></i>
            </span>{"  "}

          </Link>
          <Link to="/trainee-transaction" className={
              window.location.pathname === "/trainee-transaction" ? "nav-item button is-large is-tab is-hidden-tablet is-active is-primary" : " nav-item button is-large is-tab is-hidden-tablet"
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

export default BottomNavTrainee;
