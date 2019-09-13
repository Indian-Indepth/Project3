import React from "react";
import { Link } from "react-router-dom";

function SurveyTrainerExperience() {
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
                    <Link to='trainer-personal-info' >
                      Personal Information
                    </Link>
                  </li>
                  <li  className='is-active'>
                    <Link to='trainer-experience' aria-current='page'>Your Experience</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <h1 className='section title is-4 has-text-centered is-hidden-mobile'>
              Your Experience
            </h1>
            <form>
            <article className=' box  is-multiline'>
              <div className=' field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>Any recent client successes?</label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <div className='control'>
                      <textarea
                        className='textarea  is-info'
                        rows='2'
                        placeholder='Tell us about it...'
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div className='field is-horizontal'>
                <div className='field-label'>
                  <label className='label'>What Is Your Experience?</label>
                </div>
                <div className='field-body'>
                  <div className='field is-narrow'>
                    <div className='control'>
                      <label className='radio'>
                        <input type='radio' name='member' />
                        &nbsp;1-5 years
                      </label>&emsp;
                      <label className='radio'>
                        <input type='radio' name='member' />
                        &nbsp;5-10 years
                      </label>&emsp;
                      <label className='radio'>
                        <input type='radio' name='member' />
                        &nbsp;+10 years
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>
                    What is your training personality like?
                  </label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <div className='field'>
                      <div className='control'>
                        <textarea
                          className='textarea is-info'
                          placeholder='What is your styless...'
                          rows='2'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>
                    Do They Have Good/Bad Testimonials?
                  </label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <div className='field'>
                      <div className='control'>
                        <textarea
                          className='textarea is-info'
                          placeholder='...'
                          rows='2'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label'>
                    Do You have A Fitness/Workout Plan?
                  </label>
                </div>
                <div className='field-body'>
                  <div className='field'>
                    <div className='field'>
                      <div className='control'>
                        <textarea
                          className='textarea is-info'
                          placeholder='...'
                          rows='2'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='section'>
                <Link
                  to='/payment'
                  className='button  is-pulled-right is-warning is-large'
                >
                  Next&emsp;{" "}
                  <span>
                    <i className='fas fa-chevron-right'></i>
                  </span>
                </Link>
              </div>
            </article>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SurveyTrainerExperience;
