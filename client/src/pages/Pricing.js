import React, { Component } from "react";
import TrainerPrice from '../components/TrainerPrice'
import TraineePrice from '../components/TraineePrice'

class Price extends Component {
    render(){
        return(
            <div>
                <TrainerPrice/>
                <TraineePrice/>
            </div>
        )
    }
}

export default Price;
