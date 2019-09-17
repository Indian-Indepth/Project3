import React, { Component } from "react";
import AsideTrainer from "../components/AsideTrainer";
import "../assets/css/style.css";
import BottomNavTrainer from "../components/BottomNavTrainer";

class TrainerPayments extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <section className='main-content columns is-fullheight'>
        <AsideTrainer />
        <div className='box column is-10 has-background-white-bis'>
          <section className='section'>
            <div className='section notification is-primary'>
              <h1>{this.props.user.name}</h1>
            </div>
          </section>
        </div>
        <BottomNavTrainer />
      </section>
    );
  }
}

export default TrainerPayments;
