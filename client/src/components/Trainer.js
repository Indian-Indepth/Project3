import React from "react";

const Trainer = props => {
  return (
    <div className=''>
      <article className='columns'>
        <div className='column is-2 box'>
          <figure className='image is-256x256'>
            <img src={props.profileImageUrl} alt='avatar' />
          </figure>
        </div>
        <div className='column is-10 box'>
          <div className='content box'>
            <p>
            <h1 className='subtitle is-4'>{props.screenName}</h1>
            Phone Number: {props.phoneNumber}
              {/* <small>{props.screenName}</small> <small>31m</small> */}
             <h1 className='subtitle is-5'>Specialization: {props.specialize}</h1>
              <h1 className='subtitle is-5'>Experience: {props.experience}</h1>

            </p>
          </div>
          <button className='button is-medium is-fullwidth'>
            Select your trainer
          </button>
        </div>
      </article>
    </div>
  );
};

export default Trainer;
