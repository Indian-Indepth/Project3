import React, { Component } from "react";
// import PropTypes from "prop-types";
import AsideTrainer from "../components/AsideTrainer";
import "../assets/css/style.css";


class TrainerProfile extends Component {
//   static propTypes = {
//     user: PropTypes.shape({
//       name: PropTypes.string,
//       profileImageUrl: PropTypes.string,
//       twitterId: PropTypes.string,
//       screenName: PropTypes.string,
//       _id: PropTypes.string,
//     }),
//   };

//   state = {
//     user: {},
//     error: null,
//     authenticated: false,
//   };

//   componentDidMount() {
//     // Fetch does not send cookies. So you should add credentials: 'include'
//     fetch("http://localhost:4000/auth/login/success", {
//       method: "GET",
//       credentials: "include",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Credentials": true,
//       },
//     })
//       .then(response => {
//         if (response.status === 200) return response.json();
//         throw new Error("failed to authenticate user");
//       })
//       .then(responseJson => {
//         this.setState({
//           authenticated: true,
//           user: responseJson.user,
//         });
//       })
//       .catch(error => {
//         this.setState({
//           authenticated: false,
//           error: "Failed to authenticate user",
//         });
//       });
//   }

//   _handleNotAuthenticated = () => {
//     this.setState({ authenticated: false });
//   };

  render() {
    //const { authenticated } = this.state;
    return (
      <section className='main-content columns is-fullheight'>
        <AsideTrainer
        //   authenticated={authenticated}
        //   handleNotAuthenticated={this._handleNotAuthenticated}
        />
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
                      {/* {authenticated ? (
                        <img
                          src={this.state.user.profileImageUrl}
                          alt='avatar'
                        />
                      ) : (
                        <img
                          src='https://bulma.io/images/placeholders/256x256.png'
                          alt='avatar'
                        />
                      )} */}
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
                  <div className='media-content'>
                    <div className='content'>
                      <section className='section'>
                      <h1 className='title'>John Trainer</h1>
                        {/* <h1 className='title'>{this.state.user.screenName}</h1> */}
                        <small>johnsmith@gmail.com</small>
                        <hr />
                        <h6 className='has-text-weight-light'>
                          Contact Information
                        </h6>
                        <ul className=''>
                          <li>
                            <p className='subtitle is-6 has-text-weight-bold'>
                              Phone:&emsp;
                              <span className='has-text-weight-light is-right section'>
                                647-949-8484
                              </span>
                            </p>
                          </li>
                          <li>
                            <p className='subtitle is-6 has-text-weight-bold '>
                              Email:&emsp;&nbsp;
                              <span className='section has-text-weight-light'>
                                johnsmith@gmail.com
                              </span>
                            </p>
                          </li>
                          <li>
                            <p className='subtitle is-6 has-text-weight-bold '>
                              Address:
                              <span className='section has-text-weight-light'>
                                240 Wellesley St. E Toronto, ON, M4X 1G5
                              </span>
                            </p>
                          </li>
                        </ul>
                        <hr />
                        <h6 className='has-text-weight-light'>
                          Basic Information
                        </h6>
                        <ul className=''>
                          <li>
                            <p className='subtitle is-6 has-text-weight-bold '>
                              Birthday:
                              <span className='section has-text-weight-light'>
                                June 25, 1991
                              </span>
                            </p>
                          </li>
                          <li>
                            <p className='subtitle is-6 has-text-weight-bold '>
                              Gender:&emsp;
                              <span className='section has-text-weight-light'>
                                Male
                              </span>
                            </p>
                          </li>
                        </ul>
                        <hr />
                      </section>
                    </div>
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

export default TrainerProfile;
