import React, { Component } from "react";
import Faker from "faker";
import "../assets/css/style.css";
import Trainer from "../components/Trainer";
import API from "../utils/API"

class OurTrainer extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false,
    submitted: false,
    trainers: [],
  };

  componentDidMount() {
    API.getTrainers()
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error("failed to fetch transaction");
        }
      })
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          trainers: responseJson,
        });
        //console.log(this.state);
      })
      .catch(error => {
        this.setState({
          error: "Failed to authenticate user",
        });
      });
  }

  // assign trainer
  handleAssignTrainer = id => {
    API.assignTrainer(id)
    .then(console.log('assign trainer'))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <section className='main-content is-fullheight'>
        <div className='box has-background-white-bis'>
          <div className='container'>
            <div className='section box'>
              <h1 className='section title is-4 has-text-centered is-hidden-mobile'>
                Our Trainers
              </h1>

              {this.state.trainers.map((trainer, i) => (
                <Trainer
                  index={i + 1}
                  key={trainer._id}
                  profileImageUrl={
                    trainer.profileImageUrl
                      ? trainer.profileImageUrl
                      : Faker.internet.avatar()
                  }
                  screenName={trainer.screenName}
                  phoneNumber={trainer.phoneNumber}
                  specialize={trainer.specialize}
                  experience={trainer.experience}
                  personality={trainer.personality}
                  handleAssigntrainer={() => this.handleAssigntrainer(trainer._id)}
                />
              ))}





            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurTrainer;
