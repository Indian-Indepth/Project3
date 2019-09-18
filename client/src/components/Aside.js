import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

function Aside() {
  return (

    <aside className='box has-shadow menu column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile has-background-white'>
      <p className='menu-label'>General</p>
      <ul className='menu-list'>
        <li>
          <Link
            to='profile'
            className={
              window.location.pathname === "/profile" ? "is-active has-background-primary" : " "
            }
          >
            Your Profile
          </Link>
        </li>
        <li>
          <Link
          to='message'
            className={
              window.location.pathname === "/message" ? "is-active has-background-primary" : " "
            }>Message</Link>
        </li>
        {/* <li>
          <Link
          to='editprofile'
            className={
              window.location.pathname === "/editprofile" ? "is-active has-background-primary" : " "
            }>Edit Profile</Link>
        </li> */}
      </ul>
      <p className='menu-label'>Training</p>
      <ul className='menu-list'>
        <li>
          <Link to='yourtrainer' className={
              window.location.pathname === "/yourtrainer" ? "is-active has-background-primary" : " "
            }>
            Your Trainer
          </Link>
        </li>
        <li>
          <Link to="progress" className={
              window.location.pathname === "/progress" ? "is-active has-background-primary" : " "
            }>Your Progress</Link>
        </li>
      </ul>
      <p className='menu-label'>Transactions</p>
      <ul className='menu-list'>
        <li>
          <Link to="trainee-transaction" className={
              window.location.pathname === "/trainee-transaction" ? "is-active has-background-primary" : " "
            }>Payments</Link>
        </li>
      </ul>
    </aside>

  );
}

export default Aside;
