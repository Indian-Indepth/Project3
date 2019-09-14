import React, { Component } from "react";
import AsideTrainer from "../components/AsideTrainer";
import "../assets/css/style.css";
import BottomNavTrainer from "../components/BottomNavTrainer";

class TrainerMessage extends Component {
  render() {
    return (
      <section className='main-content columns is-fullheight'>
      <AsideTrainer/>
        <div className='box column is-10 has-background-white-bis'>
          <section className='section'>
            <div className='section notification is-primary'>
              <button className='delete'></button>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum
               efficitur. Sit amet, consectetur adipiscing
              elit
            </div>
          </section>
        </div>
        <BottomNavTrainer/>
      </section>
    );
  }
}

export default TrainerMessage;
