import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

class SurveyGoal extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false,
    submitted: false,
  };

  componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    API.loginSuccess()
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error("failed to authenticate user");
        }
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user,
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user",
        });
      });
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    window.open("http://localhost:4000/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };

  handleChange = event => {
    let user = this.state.user;
    switch (event.target.name) {
      case "fitnessGoal":
        user.fitnessGoal = event.target.value;
        break;
      case "nutritionGoals":
        user.nutritionGoals = event.target.value;
        break;
      case "motivation":
        user.motivation = event.target.value;
        break;
      case "personalTraining":
        user.personalTraining = event.target.value;
        break;
      case "trainingExperience":
        user.trainingExperience = event.target.value;
        break;
      case "trainerExpectation":
        user.trainerExpectation = event.target.value;
        break;
      default:
    }
  };

  handleSubmit = (event, id) => {
    event.preventDefault();
    let user = this.state.user;
    // console.log('Submit data:')
    // console.log(user);
    API.saveUser(user)
      .then(response => {
        // console.log('Response')
        // console.log(response)
        this.setState({ submitted: true });
      })
      .catch();
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to='/health' />;
    }
    return (
      <section className='hero'>
        {redirect}
        <div className='hero-body'>
          <div className='container'>
            <div className='box'>
              <div className='box'>
                <nav
                  className='breadcrumb is-left is-paddingless'
                  aria-label='breadcrumbs'
                >
                  <ul>
                    <li className='is-active'>
                      <a href='personalinfo'>Personal Information</a>
                    </li>
                    <li>
                      <a href='goal'>Your Goal and Expectations</a>
                    </li>
                    <li>
                      <a href='goal'>Your Health</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <h1 className='section title is-4 has-text-centered is-hidden-mobile'>
                Your Goal and Expectations
              </h1>
              <form onSubmit={this.handleSubmit}>
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
                              <select
                                onBlur={this.handleChange}
                                name='fitnessGoal'
                              >
                                <option value='Tone Muscles'>
                                  Tone Muscles
                                </option>
                                <option value='Tone Muscles'>
                                  Diet and Nutrition
                                </option>
                                <option value='Tone Muscles'>
                                  Weight Loss
                                </option>
                                <option value='Tone Muscles'>
                                  Help Better Mental Health
                                </option>
                                <option value='Tone Muscles'>
                                  Increase Strenght & Power
                                </option>
                                <option value='Tone Muscles'>
                                  Increase Endurance
                                </option>
                                <option value='Tone Muscles'>
                                  Improve Overall Health
                                </option>
                                <option value='Tone Muscles'>
                                  Improve Overall Performance
                                </option>
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
                              <select
                                onBlur={this.handleChange}
                                name='nutritionGoals'
                              >
                                <option value='Lack of Motivation'>
                                  Lack of Motivation
                                </option>
                                <option value='Lack of Motivation'>Time</option>
                                <option value='Lack of Motivation'>
                                  Lack of Equipment
                                </option>
                                <option value='Lack of Motivation'>
                                  Hitting a Plateau
                                </option>
                                <option value='Lack of Motivation'>
                                  Self Conscious
                                </option>
                                <option value='Lack of Motivation'>
                                  Not Knowing Where/How to Begin
                                </option>
                                <option value='Lack of Motivation'>
                                  Money
                                </option>
                                <option value='Lack of Motivation'>
                                  Lack of Results
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <hr />

                        <div className='field'>
                          <label className='label'>What motivates you?</label>
                          <div className='control'>
                            <div className='select is-fullwidth'>
                              <select
                                onBlur={this.handleChange}
                                name='motivation'
                              >
                                <option value='Seeing Results'>
                                  Seeing Results
                                </option>
                                <option value='Seeing Results'>
                                  Having Fun
                                </option>
                                <option value='Seeing Results'>
                                  Praise/RewardsLack of Equipmen
                                </option>
                                <option value='Seeing Results'>
                                  Accountability
                                </option>
                                <option value='Seeing Results'>
                                  Feeling Better
                                </option>
                                <option value='Seeing Results'>Health</option>
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
                              <input
                                onBlur={this.handleChange}
                                name='personalTraining'
                                type='radio'
                              />
                              Yes
                            </label>
                            <label className='radio'>
                              <input
                                onBlur={this.handleChange}
                                name='personalTraining'
                                type='radio'
                              />
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
                              onBlur={this.handleChange}
                              name='trainingExperience'
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
                              onBlur={this.handleChange}
                              name='trainerExpectation'
                              className='textarea  is-info'
                              rows='3'
                              placeholder='Anything that would help us help you...'
                            ></textarea>
                          </div>
                        </div>

                        <div className=''>
                          <button
                            type='submit'
                            className='button  is-pulled-right is-warning is-large'
                          >
                            Next&emsp;
                            <span>
                              <i className='fas fa-chevron-right'></i>
                            </span>
                          </button>
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
