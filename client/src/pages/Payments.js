import React, { Component } from "react";
import Aside from "../components/Aside";
import API from "../utils/API";
import BottomNavTrainee from "../components/BottomNavTrainee";
import "../assets/css/style.css";

class Payments extends Component {
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
        API.getPackages().then(pResponse => {
          if (pResponse.status === 200) {
            let packageType={};
            if(this.state.user.userType === 'Trainee') {
              packageType.free = pResponse.data[0];
              packageType.paid = pResponse.data[1];
            } else {
              packageType.free = pResponse.data[2];
              packageType.paid = pResponse.data[3];
            }
            this.setState({
              package: packageType,
            });
          } else {
            throw new Error("failed to get packages");
          }
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
  render() {
    return (
      <section className='main-content columns is-fullheight'>
        <Aside />
        <div className='box column is-10 has-background-white-bis'>
          <form onSubmit={this.handleSubmit}>
            <article className='box'>
              <div className=''>
                <div className='content'>
                  <section className='section'>
                    <div className='field'>
                      <label className='label'>Select your package:</label>
                      <div className='control'>
                        <div className="box">
                          <input
                            className='is-checkradio is-rtl'
                            type='radio'
                            onBlur={this.handleChange}
                            name='user_sub_type'
                            value='free'
                          />
                          &nbsp;Free - &nbsp;
                            {(this.state.package) ? (this.state.package.free.description) : ''}
                        </div>
                        <div className="box">
                          <input
                            className='is-checkradio is-rtl'
                            type='radio'
                            onBlur={this.handleChange}
                            name='user_sub_type'
                            value='paid'
                          />
                          &nbsp;Paid - &nbsp;
                            {(this.state.package) ? (this.state.package.paid.description) : ''}
                        </div>
                      </div>
                    </div>

                    <div className=''>
                      <button
                        type='submit'
                        className='button  is-pulled-right is-warning is-large'
                      >
                        Pay Now&emsp;
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
        <BottomNavTrainee />
      </section>
    );
  }
}

export default Payments;
