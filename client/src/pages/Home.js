import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BgImage from "../assets/images/bg-image.png";
import "../assets/css/style.css";
import SelectUserType from "../components/SelectUserType";
import API from "../utils/API";

class Home extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      profileImageUrl: PropTypes.string,
      twitterId: PropTypes.string,
      screenName: PropTypes.string,
      _id: PropTypes.string,
      userType: PropTypes.string,
    }),
  };
  state = {
    user: {},
    error: null,
    authenticated: false,
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

  render() {
    const { authenticated } = this.state;
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column center'>
              <div className='column'>

              </div>
              <div className='field has-addons '>
                <div className='control is-expanded'>
                {(this.state.user.userType === '')?
                (<SelectUserType user={this.state.user} />)
                :''
              }
                {!authenticated ? (<input
                    className='input is-fullwidth is-rounded is-large'
                    type='text'
                    placeholder='Email address...'
                  />) : ''}
                </div>
                <div className='control'>
                {!authenticated ? (<Link
                    to='/signup'
                    type='submit'
                    className='button is-primary is-rounded is-large'
                  >
                    Sign up today
                  </Link>) : ''}
                </div>
              </div>
            </div>
            <figure className='column image center'>
              <img src={BgImage} alt='background' width='700' />
            </figure>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
