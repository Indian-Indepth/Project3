import React, { Component } from "react";
import Faker from 'faker';
import "../assets/css/style.css";


class OurTrainer extends Component {
  render() {
    return (
      <section className='main-content is-fullheight'>

        <div className='box has-background-white-bis'>
          <div className='container'>

            <div className='section box'>
            <h1 className='section title is-4 has-text-centered is-hidden-mobile'>
                Our Trainers
              </h1>
              <div className='box'>
                <article className='media'>
                  <div className='media-left'>
                    <figure className='image is-256x256'>
                      <img
                        src={Faker.internet.avatar()}
                        alt='avatar'
                      />
                    </figure>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                        <strong>{Faker.internet.userName()}</strong> <small>{Faker.internet.email()}</small>{" "}
                        <small>31m</small>
                        <br />
                        {Faker.lorem.paragraphs()}
                      </p>
                    </div>
                    <button className="button is-medium is-fullwidth">Select your trainer</button>
                  </div>
                </article>
              </div>

              <div className='box'>
                <article className='media'>
                  <div className='media-left'>
                    <figure className='image is-256x256'>
                      <img
                        src={Faker.internet.avatar()}
                        alt='avatar'
                      />
                    </figure>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                        <strong>{Faker.internet.userName()}</strong> <small>{Faker.internet.email()}</small>{" "}
                        <small>31m</small>
                        <br />
                        {Faker.lorem.paragraphs()}
                      </p>
                    </div>
                    <button className="button is-medium is-fullwidth">Select your trainer</button>
                  </div>
                </article>
              </div>

              <div className='box'>
                <article className='media'>
                  <div className='media-left'>
                    <figure className='image is-256x256'>
                      <img
                        src={Faker.internet.avatar()}
                        alt='avatar'
                      />
                    </figure>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                        <strong>{Faker.internet.userName()}</strong> <small>{Faker.internet.email()}</small>{" "}
                        <small>31m</small>
                        <br />
                        {Faker.lorem.paragraphs()}
                      </p>
                    </div>
                    <button className="button is-medium is-fullwidth">Select your trainer</button>
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

export default OurTrainer;
