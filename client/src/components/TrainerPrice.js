import React from "react";
import { Link } from "react-router-dom";

function TrainerPrice() {
  return (
    <section className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='card has-background-primary'>
            <h1 className='box subtitle is-3 has-text-centered has-background-primary has-text-white'>
              Trainer Price Plan
            </h1>
            <div className='columns is-marginless '>
              <div className='column'>
                <div className='box  is-marginless'>
                  <article className='card is-white'>
                    <span className='has-text-info card-header-title button is-static is-fullwidth'>
                      FREE TRAINER
                    </span>
                    <p className='notification is-marginless subtitle has-text-info is-2 has-background-white has-text-centered'>
                      Free
                    </p>
                    <h1 className='has-text-centered subtitle has-text-info'>
                      2 Fitness Clients
                    </h1>
                    <div className='card-content '>
                      <ul className='has-text-info notification is-marginless'>
                        <li>
                          <i className='fas fa-check'></i> Create Training Programs
                        </li>
                        <li>
                          <i className='fas fa-check'></i> Manage Client Nutrition
                        </li>
                        <li>
                          <i className='fas fa-check'></i> Track Client Progress
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
                    <span className='has-text-primary card-header-title button is-static is-fullwidth'>
                      TRAINER
                    </span>
                    <p className='notification is-marginless subtitle has-text-primary is-2 has-background-white has-text-centered'>
                      $ 9.99<small className='is-size-5'>/mo</small>
                    </p>
                    <h1 className='has-text-centered subtitle has-text-primary'>
                      Maximum 15 Clients
                    </h1>
                    <div className='card-content '>
                      <div className='card-content '>
                        <ul className='has-text-primary notification is-marginless'>
                          <li>
                            <i className='fas fa-check'></i> Create Training
                            Programs
                          </li>
                          <li>
                            <i className='fas fa-check'></i> Manage Client Nutrition
                          </li>
                          <li>
                            <i className='fas fa-check'></i> Track Client Progress
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

export default TrainerPrice;
