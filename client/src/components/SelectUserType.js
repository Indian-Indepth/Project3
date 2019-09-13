import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

class SelectUserType extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ''
    };
  this.radioChange = this.radioChange.bind(this);
}

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }

  render(){
    return (
      <div className='box column'>
        <h1>Select your user type</h1>
        <form>
          <div className='field'>
            <input
              className='is-checkradio is-rtl'
              value='Trainer'
              type='radio'
              name='user_type'
              checked={this.state.selectedOption === "Trainer"}
               onChange={this.radioChange}
            />
            &nbsp;<label htmlFor='trainer'>Trainer</label>&emsp;
            <input
              className='is-checkradio is-rtl'
              value='Trainee'
              type='radio'
              name='user_type'
              checked={this.state.selectedOption === "Trainee"}
               onChange={this.radioChange}
            />
            &nbsp;<label htmlFor='trainee'>Trainee</label>
          </div>
          <div className='field'>
          {this.state.selectedOption === "Trainer" ? (
            <Link
              to='/trainer-personal-info'
              className='button is-rounded is-success is-fullwidth'
            >
              Submit
            </Link>
          ):(<Link
              to='/personalinfo'
              className='button is-rounded is-success is-fullwidth'
            >
              Submit
            </Link>)}

          </div>
        </form>
      </div>
    );
  }

}

export default SelectUserType;
