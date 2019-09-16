import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

class SurveyTrainerExperience extends Component {
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
    window.open("https://link-to-lift.herokuapp.com/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };

  handleChange = event => {
    let user = this.state.user;
    switch (event.target.name) {
      case "recentSuccess":
        user.recentSuccess = event.target.value;
        break;
      case "experience":
        user.experience = event.target.value;
        break;
      case "personality":
        user.personality = event.target.value;
        break;
      case "testimonial":
        user.testimonial = event.target.value;
        break;
      case "workoutPlan":
          user.workoutPlan = event.target.value;
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
      redirect = <Redirect to='/payments' />;
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
                    <li>
                      <a href='trainer-personal-info'>
                        Personal Information
                      </a>
                    </li>
                    <li className='is-active'>
                      <a href='trainer-experience' aria-current='page'>
                        Your Experience
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <h1 className='section title is-4 has-text-centered is-hidden-mobile'>
                Your Experience
              </h1>
              <form onSubmit={this.handleSubmit}>
                <article className=' box  is-multiline'>
                  <div className=' field is-horizontal'>
                    <div className='field-label is-normal'>
                      <label className='label'>
                        Any recent client successes?
                      </label>
                    </div>
                    <div className='field-body'>
                      <div className='field'>
                        <div className='control'>
                          <textarea
                            onBlur={this.handleChange}
                            className='textarea  is-info'
                            name='recentSuccess'
                            rows='2'
                            placeholder='Tell us about it...'
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className='field is-horizontal'>
                    <div className='field-label'>
                      <label className='label'>What Is Your Experience?</label>
                    </div>
                    <div className='field-body'>
                      <div className='field is-narrow'>
                        <div className='control'>
                          <label className='radio'>
                            <input onBlur={this.handleChange} type='radio' name='experience' value = "1-5 years" />
                            &nbsp;1-5 years
                          </label>
                          &emsp;
                          <label className='radio'>
                            <input onBlur={this.handleChange} type='radio' name='experience' value = "5-10 years" />
                            &nbsp;5-10 years
                          </label>
                          &emsp;
                          <label className='radio'>
                            <input onBlur={this.handleChange} type='radio' name='experience' value = "+10 years" />
                            &nbsp;+10 years
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className='field is-horizontal'>
                    <div className='field-label is-normal'>
                      <label className='label'>
                        What is your training personality like?
                      </label>
                    </div>
                    <div className='field-body'>
                      <div className='field'>
                        <div className='field'>
                          <div className='control'>
                            <textarea
                              onBlur={this.handleChange}
                              className='textarea is-info'
                              name='personality'
                              placeholder='What is your styless...'
                              rows='2'
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className='field is-horizontal'>
                    <div className='field-label is-normal'>
                      <label className='label'>
                        Do They Have Good/Bad Testimonials?
                      </label>
                    </div>
                    <div className='field-body'>
                      <div className='field'>
                        <div className='field'>
                          <div className='control'>
                            <textarea
                              onBlur={this.handleChange}
                              className='textarea is-info'
                              name='testimonial'
                              placeholder='Your testimonials....'
                              rows='2'
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className='field is-horizontal'>
                    <div className='field-label is-normal'>
                      <label className='label'>
                        Do You have A Fitness/Workout Plan?
                      </label>
                    </div>
                    <div className='field-body'>
                      <div className='field'>
                        <div className='field'>
                          <div className='control'>
                            <textarea
                              onBlur={this.handleChange}
                              className='textarea is-info'
                              name='workoutPlan'
                              placeholder='Your workout plan...'
                              rows='2'
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='section'>
                    <button
                    type='submit'
                      className='button  is-pulled-right is-warning is-large'
                    >
                      Save&emsp;{" "}
                      <span>
                        <i className='fas fa-chevron-right'></i>
                      </span>
                    </button>
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

export default SurveyTrainerExperience;
