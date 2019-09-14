import React, { Component } from "react";
import AsideTrainer from "../components/AsideTrainer";
import "../assets/css/style.css";
import BottomNavTrainer from "../components/BottomNavTrainer";

class YourClient extends Component {
  render() {
    return (
      <section className='main-content columns is-fullheight'>
        <AsideTrainer />
        <div className='box column is-10 has-background-white-bis'>
          <div className='container'>
            <div className='section'>
              <div className='box'>
                <article className='media'>
                  <div className='media-left'>
                    <figure className='image is-256x256'>
                      <img
                        src='https://bulma.io/images/placeholders/256x256.png'
                        alt='avatar'
                      />
                    </figure>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                        <small>31m</small>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean efficitur sit amet massa fringilla egestas.
                        Nullam condimentum luctus turpis.
                      </p>
                    </div>

                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <BottomNavTrainer/>
      </section>
    );
  }
}

export default YourClient;
