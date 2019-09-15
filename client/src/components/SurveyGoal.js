import React, { Component } from "react";
import { Link } from "react-router-dom";

class SurveyGoal extends Component {
  render() {
    return (
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <div className='box'>
              <div className='box'>
                <nav
                  className='breadcrumb is-left is-paddingless'
                  aria-label='breadcrumbs'
                >
                  <ul>
                    <li>
                      <Link to='personalinfo'>Personal Information</Link>
                    </li>
                    <li className='is-active'>
                      <Link to='goal' aria-current='page'>
                        Your Goal and Expectations
                      </Link>
                    </li>
                    <li>
                      <Link to='health'>Your Health</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <h1 className='section title is-4 has-text-centered is-hidden-mobile'>
                Your Goal and Expectations
              </h1>
              <form>
                <article className='box'>
                  <div className=''>
                    <div className='content'>
                      <section className='section'>
                        <div className='field '>
                          <label className='label'>
                            What is your Fitness Goal?
                          </label>
                          <div className='control'>
                            <div className='select is-fullwidth'>
                              <select>
                                <option>Tone Muscles</option>
                                <option>Diet and Nutrition</option>
                                <option>Weight Loss</option>
                                <option>Help Better Mental Health</option>
                                <option>Increase Strenght & Power</option>
                                <option>Increase Endurance</option>
                                <option>Improve Overall Health</option>
                                <option>Improve Overall Performance</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <hr />
                        <div className='field'>
                          <label className='label'>
                            What is keeping you from achieving your Fitness &
                            Nutrition goals?
                          </label>
                          <div className='control'>
                            <div className='select is-fullwidth'>
                              <select>
                                <option>Lack of Motivation</option>
                                <option>Time</option>
                                <option>Lack of Equipment</option>
                                <option>Hitting a Plateau</option>
                                <option>Self Conscious</option>
                                <option>Not Knowing Where/How to Begin</option>
                                <option>Money</option>
                                <option>Lack of Results</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <hr />

                        <div className='field'>
                          <label className='label'>What motivates you?</label>
                          <div className='control'>
                            <div className='select is-fullwidth'>
                              <select>
                                <option>Seeing Results</option>
                                <option>Having Fun</option>
                                <option>Praise/RewardsLack of Equipmen</option>
                                <option>Accountability</option>
                                <option>Feeling Better</option>
                                <option>Health</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <hr />

                        <div className='field'>
                          <label className='label'>
                            Have you ever done personal training before?
                          </label>
                          <div className='control'>
                            <label className='radio'>
                              <input type='radio' name='member' />
                              Yes
                            </label>
                            <label className='radio'>
                              <input type='radio' name='member' />
                              No
                            </label>
                          </div>
                        </div>

                        <hr />

                        <div className='field'>
                          <label className='label'>
                            If yes How long ago? How was your experience?
                          </label>
                          <div className='control'>
                            <textarea
                              className='textarea is-info'
                              rows='3'
                              placeholder='Please explain...'
                            ></textarea>
                          </div>
                        </div>
                        <hr />
                        <div className='field'>
                          <label className='label'>
                            What do you expect from a personal trainer and/or
                            any information that wouold make your experience
                            better?
                          </label>
                          <div className='control'>
                            <textarea
                              className='textarea  is-info'
                              rows='3'
                              placeholder='Anything that would help us help you...'
                            ></textarea>
                          </div>
                        </div>

                        <div className=''>
                          <Link
                            to='/health'
                            className='button  is-pulled-right is-warning is-large'
                          >
                            Next&emsp;
                            <span>
                              <i className='fas fa-chevron-right'></i>
                            </span>
                          </Link>
                        </div>
                      </section>
                    </div>
                  </div>
                </article>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SurveyGoal;
