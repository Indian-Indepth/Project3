import React, { Component } from "react";
import { Link } from "react-router-dom";
import BgImage from "../assets/images/bg-image.png";
import '../assets/css/style.css';

class Home extends Component {
  render() {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column center'>
              <div className='field has-addons '>
                <div className='control is-expanded'>
                  <input
                    className='input is-fullwidth is-rounded is-large'
                    type='text'
                    placeholder='Email address...'
                  />
                </div>
                <div className='control'>
                  <Link
                    to="/signup"
                    type='submit'
                    className='button is-primary is-rounded is-large'
                  >
                    Sign up today
                  </Link>
                </div>
              </div>
            </div>
            <figure className='column image center'>
              <img
                src={BgImage}
                alt='background'
                width='700'
              />
            </figure>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
