import React, { Component } from "react";
import Aside from "../components/Aside";
import Chart from "../components/Chart";
import "../assets/css/style.css";

class Progress extends Component {
  render() {
    return (
      <section className='main-content columns is-fullheight'>
        <Aside />
        <div className='box column is-10 has-background-white-bis'>
        <div className="box section">
        <Chart/>
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
                        />
                        <span className='icon is-small is-left'>
                          <i className='fas fa-user'></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Progress;
