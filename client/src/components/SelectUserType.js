import React, {Component} from "react";
import "../assets/css/style.css";
import API from "../utils/API";
import {Redirect} from "react-router-dom";

class SelectUserType extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      error: null,
      authenticated: false,
      submitted: false,
    }

  this.handleChange=(event)=>{
    this.setState({userType: event.target.value})
  }
  this.handleSubmit=(event, id)=> {
    event.preventDefault()
    this.props.user.userType = this.state.userType
    let user = this.props.user;
    API.saveUser(user)
    .then( response => {
      this.setState({user: user});
      this.setState({submitted:true});
    })
    .catch();
  }
}

  render(){
    let redirect = null;
    if(this.state.submitted ) {
      if(this.state.user.userType === 'Trainer') {
        redirect = <Redirect to = "/trainer-personal-info" />
      } else {
        redirect = <Redirect to = "/personalinfo" />
      }
    }
    return (
      <div className='box has-text-dark column'>
        {redirect}
        <h1 className="title is-5 has-text-centered">Select your user type</h1>
        <form onSubmit={this.handleSubmit}>
          <div className=' has-text-centered field'>
          <div className="box">
          <input
              className='is-checkradio is-large'
              value='Trainer'
              type='radio'
              name='userType'
              id='Trainer'
              onChange={this.handleChange}
            />
            &nbsp;<label htmlFor="Trainer">Trainer</label>
          </div>

          <div className="box">
          <input
              className='is-checkradio is-largee'
              value='Trainee'
              type='radio'
              name='userType'
              id="Trainee"
               onChange={this.handleChange}
            />
            &nbsp;<label htmlFor='Trainee'>Trainee</label>
          </div>

          </div>
          <div className='field'>
            <button
              className='button is-large is-success is-fullwidth'
             type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }



}

export default SelectUserType;
