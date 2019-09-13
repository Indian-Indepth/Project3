import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

function AsideTrainer() {
  return (
    <aside className='box has-shadow menu column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile has-background-white'>
      <p className='menu-label'>General</p>
      <ul className='menu-list'>
        <li>
          <Link
            to='trainer-profile'
            className={
              window.location.pathname === "/trainer-profile" ? "is-active has-background-primary" : " "
            }
          >
            Your Profile
          </Link>
        </li>
        <li>
          <Link
          to='trainer-message'
            className={
              window.location.pathname === "/trainer-message" ? "is-active has-background-primary" : " "
            }>Message</Link>
        </li>
        <li>
          <Link
          to='trainer-editprofile'
            className={
              window.location.pathname === "/trainer-editprofile" ? "is-active has-background-primary" : " "
            }>Edit Profile</Link>
        </li>
      </ul>
      <p className='menu-label'>Training</p>
      <ul className='menu-list'>
        <li>
          <Link to='/yourclient' className={
              window.location.pathname === "/yourclient" ? "is-active has-background-primary" : " "
            }>
            Your Client
          </Link>
        </li>

      </ul>
      <p className='menu-label'>Transactions</p>
      <ul className='menu-list'>
        <li>
          <Link to="trainer-payments" className={
              window.location.pathname === "/trainer-payments" ? "is-active has-background-primary" : " "
            }>Payments</Link>
        </li>
      </ul>
    </aside>
  );
}

export default AsideTrainer;
