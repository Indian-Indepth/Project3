import React, {Component} from "react";
import "../assets/css/style.css";
import API from "../utils/API";

class SelectUserType extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: {},
      error: null,
      authenticated: false,
    }

  this.handleChange=(event)=>{
    this.setState({userType: event.target.value})
  }
  this.handleSubmit=(event, id)=> {
    event.preventDefault()
    this.props.user.userType = this.state.userType
    let user = this.props.user;
    API.saveUser(user);
  }
}

  render(){
    return (
      <div className='box column'>

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
