import React, { Component } from "react";
import Aside from "../components/Aside";
import Faker from 'faker';
import "../assets/css/style.css";
import BottomNavTrainee from "../components/BottomNavTrainee";

class YourTrainer extends Component {
  render() {
    return (
      <section className='main-content columns is-fullheight'>
        <Aside />
        <div className='box column is-10 has-background-white-bis'>
          <div className='container'>
            <div className='section'>
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

                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <BottomNavTrainee/>
      </section>
    );
  }
}

export default YourTrainer;
