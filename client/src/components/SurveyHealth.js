import React from "react";
import { Link } from "react-router-dom";

function SurveyHealth() {
  return (
    <section className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='box'>
            <div className='box'>
              <nav
                className='breadcrumb is-left is-paddingless'
                aria-label='breadcrumbs'
              >
                <ul>
                  <li>
                    <Link to='personalinfo'>Personal Information</Link>
                  </li>
                  <li>
                    <Link to='goal'>Your Goal and Expectations</Link>
                  </li>
                  <li className='is-active'>
                    <Link to='health' aria-current='page'>
                      Your Health
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <h1 className='section title is-4 has-text-centered is-hidden-mobile'>
              Your Health Information
            </h1>
            <article className='box'>
              <div className=''>
                <div className='content'>
                  <section className='section'>
                    <div className='field'>
                      <label className='label'>
                        Do you follow a current exercise regime?
                      </label>
                      <div className='control'>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;Yes
                        </label>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;No
                        </label>
                      </div>
                    </div>

                    <hr />
                    <div className='field'>
                      <label className='label'>
                        Are there any physical limitations that would inhibit or
                        limit your participation in an exercise program?
                      </label>
                      <div className='control'>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;Yes
                        </label>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;No
                        </label>
                      </div>
                    </div>

                    <hr />

                    <div className='field'>
                      <label className='label'>
                        What activities/exercises do you currently participate
                        in?
                      </label>
                      <div className='control'>
                        <textarea
                          className='textarea is-info'
                          rows='3'
                          placeholder='Tell us about your exercise habits....'
                        ></textarea>
                      </div>
                    </div>

                    <hr />
                    <div className='field'>
                      <label className='label'>
                      &nbsp;What is your current level of exercise per-week?
                      </label>
                      <div className='control'>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;Moderate (1-5hr)
                        </label>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;None-Little (less than 1hr)
                        </label>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;High (More than 5hr)
                        </label>
                      </div>
                    </div>

                    <hr />
                    <div className='field'>
                      <label className='label'>Tobacco Use?</label>
                      <div className='control'>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;Moderate (1-3 a day)
                        </label>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;None
                        </label>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;High (More than 5 a day)
                        </label>
                      </div>
                    </div>

                    <hr />
                    <div className='field'>
                      <label className='label'>Alcohol Use?</label>
                      <div className='control'>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;Moderate (1-5 a week)
                        </label>
                        <label className='radio'>
                          <input type='radio' name='member' />
                          &nbsp;None
                        </label>
                        <label className='radio'>
                          <input type='radio' name='member' />
                           &nbsp;High (More than 5 a week)
                        </label>
                      </div>
                    </div>

                    <hr />

                    <div className='field'>
                      <label className='label'>
                        List any Medications or Health concerns
                      </label>
                      <div className='control'>
                        <textarea
                          className='textarea  is-info'
                          rows='3'
                          placeholder='Please tell us about your health concerns...'
                        ></textarea>
                      </div>
                    </div>

                    <div className=''>
                      <Link
                        to=''
                        className='button  is-pulled-right is-warning is-large'
                      >
                        Next&emsp;
                        <span>
                          <i className='fas fa-chevron-right'></i>
                        </span>
                      </Link>
                    </div>
                  </section>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SurveyHealth;
