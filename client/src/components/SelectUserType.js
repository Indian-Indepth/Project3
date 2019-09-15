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
      <div className='box column'>
        {redirect}
        <h1>Select your user type</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <input
              className='is-checkradio is-rtl'
              value='Trainer'
              type='radio'
              name='userType'
              id='Trainer'
              //checked={this.state.selectedOption === "Trainer"}
               onChange={this.handleChange}
            />
            &nbsp;<label htmlFor="Trainer">Trainer</label>&emsp;
            <input
              className='is-checkradio is-rtl'
              value='Trainee'
              type='radio'
              name='userType'
              id="Trainee"
              //checked={this.state.selectedOption === "Trainee"}
               onChange={this.handleChange}
            />
            &nbsp;<label htmlFor='Trainee'>Trainee</label>
          </div>
          <div className='field'>
          {/* {this.renderRedirect()} */}
          {/* {this.state.selectedOption === "Trainer" ? ( */}
            <button

              // to='/trainer-personal-info'

              className='button is-rounded is-success is-fullwidth'
             // onClick={this.setRedirect}
             type="submit"
            >
              Submit
            </button>
          {/* ):(<button
              to='/personalinfo'
              className='button is-rounded is-success is-fullwidth'
              type="submit"
            >
              Submit
            </button>)} */}

          </div>
        </form>
      </div>
    );
  }



}

export default SelectUserType;
