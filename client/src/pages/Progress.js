import React, { Component } from "react";
import Aside from "../components/Aside";
import Chart from "../components/Chart";
import "../assets/css/style.css";
import BottomNavTrainee from "../components/BottomNavTrainee";
import API from "../utils/API";

class Progress extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      error: null,
      authenticated: false,
      submitted: false,
    }
    this.handleChange=(event)=>{
      this.setState({weight: event.target.value})
    }
    this.handleSubmit=(event, id)=> {
      event.preventDefault()
      this.state.user.weight.push = this.state.weight
      let user = this.state.user;
      API.saveUser(user)
      .then( response => {
        this.setState({user: user});
        this.setState({submitted:true});
      })
      .catch();
    }
  }
  render() {
    const { authenticated } = this.state;
    const {user} = this.state;

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
              <form>
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
                          className='input'
                          type='number'
                          placeholder='Your present weight...'
                          onChange={this.handleChange}
                        />
                        <span className='icon is-small is-left'>
                          <i className='fas fa-user'></i>
                        </span>
                        <button
                            className='bd-tw-button button fa fa-plus-alt'
                            data-sign-in=''
                            data-social-action=''
                            onClick={this.handleSubmit}
                            to=''
                         >
                    <span className='icon'>
                      <i className=''></i>
                    </span>
                    <span></span>
                    </button>
                      </p>
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
