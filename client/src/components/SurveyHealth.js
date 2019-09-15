import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

class SurveyHealth extends Component {

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
      case "currentExercise":
        user.currentExercise = event.target.value;
        break;
      case "physicalLimit":
        user.physicalLimit = event.target.value;
        break;
      case "currentActivities":
        user.currentActivities = event.target.value;
        break;
      case "excerciseWeekly":
        user.excerciseWeekly = event.target.value;
        break;
      case "tabaccoUse":
        user.tabaccoUse = event.target.value;
        break;
      case "alcoholUse":
        user.alcoholUse = event.target.value;
        break;
        case "medsHealth":
            user.medsHealth = event.target.value;
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

  render(){
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to='/trainee-payments' />;
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
                Your Health Information
              </h1>
              <form onSubmit={this.handleSubmit}>
              <article className='box'>
                <div className=''>
                  <div className='content'>
                    <section className='section'>
                      <div className='field'>
                        <label className='label'>
                          Do you follow a current exercise regime?
                        </label>
                        <div className='control'>
                          <label className='radio'>
                            <input type='radio' onBlur={this.handleChange}
                                name='currentExercise' value="Yes" />
                            &nbsp;Yes
                          </label>
                          <label className='radio'>
                            <input type='radio' onBlur={this.handleChange}
                                name='currentExercise' value="No" />
                            &nbsp;No
                          </label>
                        </div>
                      </div>

                      <hr />
                      <div className='field'>
                        <label className='label'>
                          Are there any physical limitations that would inhibit or
                          limit your participation in an exercise program?
                        </label>
                        <div className='control'>
                          <label className='radio'>
                            <input type='radio' value="Yes" onBlur={this.handleChange}
                                name='physicalLimit' />
                            &nbsp;Yes
                          </label>
                          <label className='radio'>
                            <input type='radio' value="No" onBlur={this.handleChange}
                                name='physicalLimit' />
                            &nbsp;No
                          </label>
                        </div>
                      </div>

                      <hr />

                      <div className='field'>
                        <label className='label'>
                          What activities/exercises do you currently participate
                          in?
                        </label>
                        <div className='control'>
                          <textarea
                            onBlur={this.handleChange}
                            name='currentActivities'
                            className='textarea is-info'
                            rows='3'
                            placeholder='Tell us about your exercise habits....'
                          ></textarea>
                        </div>
                      </div>

                      <hr />
                      <div className='field'>
                        <label className='label'>
                        &nbsp;What is your current level of exercise per-week?
                        </label>
                        <div className='control'>
                          <label className='radio'>
                            <input type='radio' value="Moderate" onBlur={this.handleChange}
                            name='excerciseWeekly' />
                            &nbsp;Moderate (1-5hr)
                          </label>
                          <label className='radio'>
                            <input type='radio' onBlur={this.handleChange}
                            name='excerciseWeekly' value="None-Little" />
                            &nbsp;None-Little (less than 1hr)
                          </label>
                          <label className='radio'>
                            <input type='radio' onBlur={this.handleChange}
                            name='excerciseWeekly' value="High" />
                            &nbsp;High (More than 5hr)
                          </label>
                        </div>
                      </div>

                      <hr />
                      <div className='field'>
                        <label className='label'>Tobacco Use?</label>
                        <div className='control'>
                          <label className='radio'>
                            <input type='radio' onBlur={this.handleChange}
                            name='tabaccoUse' />
                            &nbsp;Moderate (1-3 a day)
                          </label>
                          <label className='radio'>
                            <input type='radio' onBlur={this.handleChange}
                            name='tabaccoUse' />
                            &nbsp;None
                          </label>
                          <label className='radio'>
                            <input type='radio' onBlur={this.handleChange}
                            name='tabaccoUse' />
                            &nbsp;High (More than 5 a day)
                          </label>
                        </div>
                      </div>

                      <hr />
                      <div className='field'>
                        <label className='label'>Alcohol Use?</label>
                        <div className='control'>
                          <label className='radio'>
                            <input type='radio' onBlur={this.handleChange}
                            name='alcoholUse' value="Moderate" />
                            &nbsp;Moderate (1-5 a week)
                          </label>
                          <label className='radio'>
                            <input type='radio' onBlur={this.handleChange}
                            name='alcoholUse' value="None" />
                            &nbsp;None
                          </label>
                          <label className='radio'>
                            <input type='radio' onBlur={this.handleChange}
                            name='alcoholUse' value="High" />
                             &nbsp;High (More than 5 a week)
                          </label>
                        </div>
                      </div>

                      <hr />

                      <div className='field'>
                        <label className='label'>
                          List any Medications or Health concerns
                        </label>
                        <div className='control'>
                          <textarea
                            onBlur={this.handleChange}
                            name='medsHealth'
                            className='textarea  is-info'
                            rows='3'
                            placeholder='Please tell us about your health concerns...'
                          ></textarea>
                        </div>
                      </div>

                      <div className=''>
                        <button
                          type="submit"
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


export default SurveyHealth;
