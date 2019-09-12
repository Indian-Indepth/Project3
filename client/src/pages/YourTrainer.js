import React, { Component } from "react";
import Aside from "../components/Aside";
import "../assets/css/style.css";

class YourTrainer extends Component {
  render() {
    return (
      <section className='main-content columns is-fullheight'>
      <Aside/>
      <div className="box column is-10 has-background-white-bis">
                <div className="container">
                    <div className="section">
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-256x256">
                                        <img src="https://bulma.io/images/placeholders/256x256.png" alt="avatar" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                            <br/>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur
                                            sit
                                            amet massa
                                            fringilla egestas. Nullam condimentum luctus turpis.
                                        </p>
                                    </div>
                                    {/* <nav className="level is-mobile">
                                        <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                    <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                    <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                    <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav> */}
                                </div>


                            </article>
                        </div>
                    </div>
                </div>
            </div>

      </section>
    );
  }
}

export default YourTrainer;
