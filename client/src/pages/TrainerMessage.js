import React, { Component } from "react";
import AsideTrainer from "../components/AsideTrainer";
import "../assets/css/style.css";
import BottomNavTrainer from "../components/BottomNavTrainer";

class TrainerMessage extends Component {
  constructor(props){
    super(props)

    // this.state = {
    //   user: {},
    //   error: null,
    //   authenticated: false,
    //   submitted: false,
    //   transactions: {},
    // };
  }






  render() {
    return (
      <section className='main-content columns is-fullheight'>
      <AsideTrainer/>
        <div className='box column is-10 has-background-white-bis'>
          <section className='section'>
            <div className='section notification is-primary'>
              <button className='delete'></button>
              {this.props.user.name}
            </div>
          </section>
        </div>
        <BottomNavTrainer/>
      </section>
    );
  }
}

export default TrainerMessage;
