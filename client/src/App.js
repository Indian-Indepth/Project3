import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import SurveyPersonalInfo from "./components/SurveyPersonalInfo";
import SurveyTrainerPersonalInfo from "./components/SurveyTrainerPersonalInfo";
import SurveyTrainerExperience from "./components/SurveyTrainerExperience";
import SurveyGoal from "./components/SurveyGoal";
import SurveyHealth from "./components/SurveyHealth";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Message from "./pages/Message";
import TraineeProfile from "./pages/TraineeProfile";
import TrainerProfile from "./pages/TrainerProfile";
import TrainerMessage from "./pages/TrainerMessage";
import EditUserProfile from "./pages/EditUserProfile";
import YourTrainer from "./pages/YourTrainer";
import Progress from "./pages/Progress";
import TrainerEditUserProfile from "./pages/TrainerEditProfile";
import YourClient from "./pages/YourClient";
import "./App.css";
//import Payments from "./pages/Payments";
import API from "./utils/API";
import TraineePayments from "./pages/TraineePayments";
import Transactions from "./pages/Transactions";
import Payments from "./pages/Payments";


class App extends Component {

  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      profileImageUrl: PropTypes.string,
      socialId: PropTypes.string,
      screenName: PropTypes.string,
      _id: PropTypes.string,
      userType: PropTypes.string
    }),
  };

  state = {
    user: {},
    error: null,
    authenticated: false,
  };

  componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    // fetch("http://localhost:4000/auth/login/success", {
    //   method: "GET",
    //   credentials: "include",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials": true,
    //   },
    // })
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

  render() {
    const authenticated = this.state;
    console.log('Authenticated:')
    console.log(authenticated);
    return (
      <div>
        <Router>
          <Navbar
            authenticated = {authenticated}
            handleNotAuthenticated = {this._handleNotAuthenticated}
            user = {this.state.user}
            logout = {this._handleLogoutClick}
          />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/personalinfo' component={SurveyPersonalInfo} />
            <Route exact path='/trainer-personal-info' component={SurveyTrainerPersonalInfo} />
            <Route exact path='/goal' component={SurveyGoal} />
            <Route exact path='/trainer-experience' component={SurveyTrainerExperience} />
            <Route exact path='/health' component={SurveyHealth} />
            <Route exact path='/profile' component={TraineeProfile} />
            <Route exact path='/trainer-profile' component={TrainerProfile} />
            <Route exact path='/message' component={Message} />
            <Route exact path='/trainer-message' component={TrainerMessage} />
            <Route exact path='/progress' component={Progress} />
            <Route exact path='/editprofile' component={EditUserProfile} />
            <Route exact path='/trainer-editprofile' component={TrainerEditUserProfile} />
            <Route exact path='/yourtrainer' component={YourTrainer} />
            <Route exact path='/yourclient' component={YourClient} />
            <Route exact path='/trainee-payments' component={TraineePayments} />
            <Route exact path='/payments' component={Payments} />
            <Route exact path='/transactions' component={()=><Transactions
            authenticated = {authenticated}
            handleNotAuthenticated = {this._handleNotAuthenticated}
            user = {this.state.user}
            />} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
