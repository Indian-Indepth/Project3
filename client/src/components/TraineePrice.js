import React from "react";
import { Link } from "react-router-dom";

function TraineePrice() {
  return (
    <section className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='card has-background-warning'>
            <h1 className='box subtitle is-3 has-text-centered has-background-warning'>
              Trainee Price Plan
            </h1>
            <div className='columns is-marginless '>
              <div className='column'>
                <div className='box  is-marginless'>
                  <article className='card is-white'>
                    <span className='has-text-info card-header-title button is-static is-fullwidth is-uppercase'>
                      FREE Trainee
                    </span>
                    <p className='notification is-marginless subtitle has-text-info is-2 has-background-white has-text-centered'>
                      Free
                    </p>
                    {/* <h1 className='has-text-centered subtitle has-text-info'></h1> */}
                    <div className='card-content '>
                      <ul className='has-text-info notification is-marginless'>
                        <li>
                          <i className='fas fa-check'></i> Get Training Info
                        </li>
                        <li>
                          <i className='fas fa-check'></i> Get Nutrition Info
                        </li>
                        <li>
                          <i className='fas fa-check'></i> Track Progress
                        </li>
                      </ul>
                      <div className='section field'>
                        <Link to="/signup" className='button is-large  is-rounded is-info is-fullwidth is-uppercase'>
                          try it free now
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className='column'>
                <div className='box is-marginless'>
                  <article className='card is-white'>
                    <span className='has-text-primary card-header-title button is-static is-fullwidth is-uppercase'>
                      Trainee
                    </span>
                    <p className='notification is-marginless subtitle has-text-primary is-2 has-background-white has-text-centered'>
                      $ 24.99 <small className='is-size-5'>/mo</small>
                    </p>
                    <h1 className='has-text-centered subtitle has-text-primary'>
                      Includes $20 Trainer Fee
                    </h1>
                    <div className='card-content '>
                      <div className='card-content '>
                        <ul className='has-text-primary notification is-marginless'>
                          <li>
                            <i className='fas fa-check'></i> Get Training Info
                            Programs
                          </li>
                          <li>
                            <i className='fas fa-check'></i> Get Nutrition Info
                          </li>
                          <li>
                            <i className='fas fa-check'></i> Track Progress
                          </li>
                          <li>
                            <i className='fas fa-check'></i> Instant Chat Messaging
                          </li>
                          <li>
                            <i className='fas fa-check'></i> Accept Online Payments
                          </li>
                        </ul>
                        <div className='section field'>
                          <Link to="/signup" className='button is-large  is-rounded is-primary is-fullwidth is-uppercase'>
                            try it free now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TraineePrice;
