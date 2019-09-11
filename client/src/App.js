import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import SurveyPersonalInfo from "./components/SurveyPersonalInfo";
import SurveyGoal from "./components/SurveyGoal";
import SurveyHealth from "./components/SurveyHealth";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Message from "./pages/Message";
import TraineeProfile from "./pages/TraineeProfile";
import EditUserProfile from "./pages/EditUserProfile";
import "./App.css";




class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/personalinfo' component={SurveyPersonalInfo} />
            <Route exact path='/goal' component={SurveyGoal} />
            <Route exact path='/health' component={SurveyHealth} />
            <Route exact path='/profile' component={TraineeProfile} />
            <Route exact path='/message' component={Message} />
            <Route exact path='/editprofile' component={EditUserProfile} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
