import React, { Component } from "react";
import BgImage from "../assets/images/bg-image.png";
import '../assets/css/style.css';

class SignIn extends Component {
    render(){
        return(
            <section className="hero">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered is-full">
                    <figure className="column image center is-hidden-mobile">
                        <img src={BgImage} alt="background" width="10" />
                    </figure>
                    <div className="column is-5-tablet is-4-desktop is-5-widescreen">

                        <form action="" className="box">
                            <div className="media-content   ">
                                <div className="content">
                                    <span className="button is-fullwidth is-large is-static">Welcome Back!</span>
                                </div>
                            </div>
                            <div className="section">
                                <div className="field">
                                    <label htmlFor="" className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email" placeholder="e.g. johnsmith@gmail.com"
                                            className="input is-rounded" required />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="" className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="*******" className="input is-rounded" required />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="" className="checkbox">
                                        <input type="checkbox" className="is-rounded" />
                                        Remember me
                                    </label>
                                </div>


                                <div className="field">
                                    <button className="button is-rounded is-success is-fullwidth">
                                        Login
                                    </button>
                                </div>
                                <hr/>
                                <p className="has-text-centered has-text-grey-lighter is-size-5"> --or--</p>
                            </div>
                            <div className="field ">

                                <a href="/" className="button is-rounded is-medium is-fullwidth">
                                    <img width="20px" alt="Google &quot;G&quot; Logo"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                    &nbsp;Login with Google
                                </a>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}

export default SignIn;