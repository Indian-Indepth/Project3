import React, { Component } from "react";
import Aside from "../components/Aside"
import '../assets/css/style.css';

class TraineeProfile extends Component{
    render(){
        return(
            <section className="main-content columns is-fullheight">
            <Aside/>
            <div className="box column is-10 has-background-white-bis">
                <div className="container">
                    <div className="section">
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-256x256">
                                        <img src="https://bulma.io/images/placeholders/256x256.png" alt="avatar" />
                                    </figure>
                                    <div className="section file is-centered">
                                        <label className="file-label">
                                            <input className="file-input" type="file" name="resume"/>
                                            <span className="file-cta">
                                                <span className="file-icon">
                                                    <i className="fas fa-upload"></i>
                                                </span>
                                                <span className="file-label">
                                                    Upload your photo
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <section className="section">
                                            <h1 className="title">John Smith</h1>
                                            <small>johnsmith@gmail.com</small>
                                            <hr />
                                            <h6 className="has-text-weight-light">
                                                Contact Information
                                            </h6>
                                            <ul className="">
                                                <li>
                                                    <p className="subtitle is-6 has-text-weight-bold">
                                                        Phone:&emsp;
                                                        <span
                                                            className="has-text-weight-light is-right section">647-949-8484</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="subtitle is-6 has-text-weight-bold ">
                                                        Email:&emsp;&nbsp;
                                                        <span
                                                            className="section has-text-weight-light">johnsmith@gmail.com</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="subtitle is-6 has-text-weight-bold ">
                                                        Address:
                                                        <span className="section has-text-weight-light">240 Wellesley St. E
                                                            Toronto, ON, M4X 1G5</span>
                                                    </p>
                                                </li>
                                            </ul>
                                            <hr />
                                            <h6 className="has-text-weight-light">Basic Information</h6>
                                            <ul className="">
                                                <li>
                                                    <p className="subtitle is-6 has-text-weight-bold ">
                                                        Birthday:
                                                        <span className="section has-text-weight-light">June 25, 1991</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="subtitle is-6 has-text-weight-bold ">
                                                        Gender:&emsp;
                                                        <span className="section has-text-weight-light">Male</span>
                                                    </p>
                                                </li>
                                            </ul>
                                            <hr />
                                        </section>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default TraineeProfile;