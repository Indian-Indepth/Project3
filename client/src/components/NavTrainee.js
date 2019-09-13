import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

function NavTrainee() {
  return (

    <nav className=' navbar has-shadow'>
      <div className='container'>
        <label for='menu-toggle' className='nav-toggle'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <input type='checkbox' id='menu-toggle' className='is-hidden' />
        <div className='nav-right nav-menu'>
          <Link to="/profile" className='nav-item is-tab is-hidden-tablet'>
            <span className='icon'>
              <i className='fa fa-home'></i>
            </span>{" | "}
            Your Profile
          </Link>
          <Link className='nav-item is-tab is-hidden-tablet'>
            <span className='icon'>
              <i to="/message" className='fa fa-table'></i>
            </span>{" | "}
            Message
          </Link>
          <Link to="/editprofile" className='nav-item is-tab is-hidden-tablet'>
            <span className='icon'>
              <i className='fa fa-info'></i>
            </span>{" | "}
            Edit Profile
          </Link>
          <Link to="/yourtrainer" className='nav-item is-tab is-hidden-tablet'>
            <span className='icon'>
              <i className='fa fa-info'></i>
            </span>{" | "}
            Your Trainer
          </Link>

          <Link to="/progress" className='nav-item is-tab is-hidden-tablet'>
            <span className='icon'>
              <i className='fa fa-info'></i>
            </span>{" | "}
            Your Progress
          </Link>
          <Link to="/payments" className='nav-item is-tab is-hidden-tablet'>
            <span className='icon'>
              <i className='fa fa-info'></i>
            </span>{" | "}
            Payments
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavTrainee;
