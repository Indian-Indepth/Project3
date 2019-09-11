import React from "react";
import { Link } from "react-router-dom";

function SurveyPersonalInfo() {
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
                  <li className='is-active'>
                    <Link to='personalinfo' aria-current='page'>
                      Personal Information
                    </Link>
                  </li>
                  <li>
                    <Link to='goal'>Your Goal and Expectations</Link>
                  </li>
                  <li>
                    <Link to='health'>Your Health</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <h1 className='section title is-4 has-text-centered is-hidden-mobile'>
              Your personal information
            </h1>
            <article className='box columns is-multiline'>
              <div className='column is-one-quarter'>
                <figure className='image is-256x256 '>
                  <img
                    src='https://bulma.io/images/placeholders/256x256.png'
                    alt='avatar'
                  />
                </figure>
                <div className='section file is-centered'>
                  <label className='file-label'>
                    <input className='file-input' type='file' name='resume' />
                    <span className='file-cta'>
                      <span className='file-icon'>
                        <i className='fas fa-upload'></i>
                      </span>
                      <span className='file-label'>Upload your photo</span>
                    </span>
                  </label>
                </div>
              </div>

              <div className='column auto'>
                <div className='content'>
                  <section className='section'>
                    <div className='field is-horizontal'>
                      <div className='field-label is-normal'>
                        <label className='label'>Your Name</label>
                      </div>
                      <div className='field-body'>
                        <div className='field'>
                          <p className='control is-expanded has-icons-left'>
                            <input
                              className='input'
                              type='text'
                              placeholder='Name'
                            />
                            <span className='icon is-small is-left'>
                              <i className='fas fa-user'></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='field is-horizontal'>
                      <div className='field-label is-normal'>
                        <label className='label'>Your phone number</label>
                      </div>
                      <div className='field-body'>
                        <div className='field is-expanded'>
                          <div className='field has-addons'>
                            <p className='control'>
                              <button className='button is-static'>+1</button>
                            </p>
                            <p className='control is-expanded'>
                              <input
                                className='input'
                                type='tel'
                                placeholder='Your phone number'
                              />
                            </p>
                          </div>
                          <p className='help'>Do not enter the first zero</p>
                        </div>
                      </div>
                    </div>

                    <div className='field is-horizontal'>
                      <div className='field-label is-normal'>
                        <label className='label'>Your Height</label>
                      </div>
                      <div className='field-body'>
                        <div className='field is-expanded'>
                          <input
                            className='input'
                            type='text'
                            placeholder='Height'
                          />
                          <p className='help'>Please enter your height in inches</p>
                        </div>
                      </div>
                    </div>

                    <div className='field is-horizontal'>
                      <div className='field-label is-normal'>
                        <label className='label'>Your Weight</label>
                      </div>
                      <div className='field-body'>
                        <div className='field is-expanded'>
                          <input
                            className='input'
                            type='text'
                            placeholder='Weight'
                          />
                          <p className='help'>
                            Please enter your height in kilograms
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className=''>
                  <Link
                    to='/goal'
                    className='button  is-pulled-right is-warning is-large'
                  >
                    Next&emsp;
                    <span>
                      <i className='fas fa-chevron-right'></i>
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SurveyPersonalInfo;