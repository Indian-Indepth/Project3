import React, { Component } from "react";
import Aside from "../components/Aside";
import BottomNavTrainee from "../components/BottomNavTrainee";
import "../assets/css/style.css";


class TraineePayments extends Component {
  render() {
    return (
      <section className='main-content columns is-fullheight'>

      <Aside/>
        <div className='box column is-10 has-background-white-bis'>
          <section className='section'>
            <div className='section notification is-primary'>
              <button className='delete'></button>
              <div>This is client invoice.</div>
            </div>

          </section>
        </div>
        <BottomNavTrainee/>
      </section>
    );
  }
}

export default TraineePayments;
