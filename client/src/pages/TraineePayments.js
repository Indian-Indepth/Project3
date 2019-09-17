import React, { Component } from "react";
import Aside from "../components/Aside";
import "../assets/css/style.css";
import BottomNavTrainee from "../components/BottomNavTrainee";

class TraineePayments extends Component {
  render() {
    return (
      <section className='main-content columns is-fullheight'>
      <Aside/>
        <div className='box column is-10 has-background-white-bis'>
          <section className='section'>

          </section>
        </div>
        <BottomNavTrainee/>
      </section>
    );
  }
}

export default TraineePayments;
