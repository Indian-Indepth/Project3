import React from "react";

const Trainer = props => {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <figure className='image is-256x256'>
            <img src={props.profileImageUrl} alt='avatar' />
          </figure>
        </div>
        <div className='media-content'>
          <div className='content'>
            <p>
              <strong>{props.screenName}</strong>{" "} {props.phoneNumber}
              <small>{props.screenName}</small> <small>31m</small>
              <br />
              {props.specialize}
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
