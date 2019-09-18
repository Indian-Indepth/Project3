import React, { Component } from "react";
import Aside from "../components/Aside";
import Chart from "../components/Chart";
import "../assets/css/style.css";
import BottomNavTrainee from "../components/BottomNavTrainee";
import API from "../utils/API";

class Progress extends Component {
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
      case "weight":
        user.weight = event.target.value;
        break;
      default:
    }
 
    
  };

  handleSubmit = (event, id) => {
    event.preventDefault();
    let user = this.state.user;
     console.log('Submit data:')
    console.log(user);
    API.saveUser(user)
      .then(response => {
        console.log('Response')
        console.log(response)
        this.setState({ submitted: true });
      })
      .catch();
  };

  render() {
    const { authenticated } = this.state;
    const {user} = this.state.user;

    return (
      <section className='main-content columns is-fullheight'>
        <Aside />
        <div className='box column is-10 has-background-white-bis'>
        <div className="box section">
        <Chart  user = {user}
                authenticated={authenticated}
                handleNotAuthenticated={this._handleNotAuthenticated} />
        </div>

          <section className='section'>
            <div className='box'>
              <form onSubmit={this.handleSubmit}>
                <div className=''>
                  <div className='field'>
                    <label className='label'>
                      Please update your present weight in kilograms
                    </label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <p className='control is-expanded has-icons-left'>
                        <input
                          onChange={this.handleChange}
                          className='input'
                          type='number'
                          placeholder='Your present weight...'
                          name='weight'
                          
                        />
                        <span className='icon is-small is-left'>
                          <i className='fas fa-user'></i>
                        </span>
                       </p>
                    </div>
                    <div className='section'>
                    <button
                    type='submit'
                      className='button  is-pulled-right is-warning is-large fas'
                    >
                      add &emsp;{" "}
                    </button>
                  </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        <BottomNavTrainee/>
      </section>
    );
  }
}

export default Progress;
