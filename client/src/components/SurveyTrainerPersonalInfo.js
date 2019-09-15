import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

class SurveyTrainerPersonalInfo extends Component {

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
          }else {
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
        case "name":
          user.name = event.target.value;
          break;
        case "phoneNumber":
          user.phoneNumber = event.target.value;
          break;
        case "specialize":
          user.specialize = event.target.value;
          break;
        case "training":
          user.training = event.target.value;
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
      redirect = <Redirect to='/trainer-experience' />;
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
                      <a href='trainer-personal-info'>Personal Information</a>
                    </li>
                    <li>
                      <a href='trainer-experience'>Your Experience</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <h1 className='section title is-4 has-text-centered is-hidden-mobile'>
                Your personal information
              </h1>
              <form onSubmit={this.handleSubmit}>
                <article className='box columns is-multiline'>
                  <div className='column is-one-quarter'>
                    <figure className='image is-256x256 '>
                      <img
                        src='https://bulma.io/images/placeholders/256x256.png'
                        alt='placeholder'
                      />
                    </figure>
                    <div className='section file is-centered'>
                      <label className='file-label'>
                        <input
                          className='file-input'
                          type='file'
                          name='resume'
                        />
                        <span className='file-cta'>
                          <span className='file-icon'>
                            <i className='fas fa-upload'></i>
                          </span>
                          <span className='file-label'>Upload your photo</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className='column auto'>
                    <div className='content'>
                      <section className='section'>
                        <div className='field is-horizontal'>
                          <div className='field-label is-normal'>
                            <label className='label'>Your Name</label>
                          </div>
                          <div className='field-body'>
                            <div className='field'>
                              <p className='control is-expanded has-icons-left'>
                                <input
                                  onBlur={this.handleChange}
                                  name='name'
                                  className='input'
                                  type='text'
                                  placeholder='Name'
                                />
                                <span className='icon is-small is-left'>
                                  <i className='fas fa-user'></i>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className='field is-horizontal'>
                          <div className='field-label is-normal'>
                            <label className='label'>Your phone number</label>
                          </div>
                          <div className='field-body'>
                            <div className='field is-expanded'>
                              <div className='field has-addons'>
                                <p className='control'>
                                  <span className='button is-static'>+1</span>
                                </p>
                                <p className='control is-expanded'>
                                  <input
                                    onBlur={this.handleChange}
                                    name='phoneNumber'
                                    className='input'
                                    type='tel'
                                    placeholder='Your phone number'
                                  />
                                </p>
                              </div>
                              <p className='help'>
                                Do not enter the first zero
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className='field is-horizontal'>
                          <div className='field-label is-normal'>
                            <label className='label'>
                              What is your specialization?
                            </label>
                          </div>
                          <div className='field-body'>
                            <div className='field'>
                              <div className='control'>
                                <textarea
                                  onBlur={this.handleChange}
                                  name='specialize'
                                  className='textarea  is-info'
                                  rows='2'
                                  placeholder='Please Explain...'
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='field is-horizontal'>
                          <div className='field-label is-normal'>
                            <label className='label'>
                              What are your training and certifications?
                            </label>
                          </div>
                          <div className='field-body'>
                            <div className='field'>
                              <div className='control has-addons'>
                                <textarea
                                  onBlur={this.handleChange}
                                  name='training'
                                  className='textarea  is-info'
                                  rows='2'
                                  placeholder='Education...'
                                ></textarea>
                                <div className='file is-centered'>
                                  <label className='file-label'>
                                    <input
                                      className='file-input'
                                      type='file'
                                      name='resume'
                                    />
                                    <span className='file-cta'>
                                      <span className='file-icon'>
                                        <i className='fas fa-upload'></i>
                                      </span>
                                      <span className='file-label'>
                                        Please upload a copy of your
                                        certification
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className=''>
                      <button
                        type='submit'
                        className='button is-pulled-right is-warning is-large'
                      >
                        Next &emsp;{" "}
                      </button>
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

export default SurveyTrainerPersonalInfo;
