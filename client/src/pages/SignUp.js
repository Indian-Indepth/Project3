import React, { Component } from "react";
import { Link } from "react-router-dom";
import BgImage from "../assets/images/bg-image.png";
import '../assets/css/style.css';


class SignUp extends Component {

    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:"",
            error:""
        }
    }
    handleChange =(name) =>(event)=>{
        this.setState({[name]: event.target.value}); 
    }
    clickSubmit= event =>{
        event.preventDefault();
        const{email,password} = this.state
        const user ={
            name : email,
            email : email,
            password: password
        }
        console.log(user);
        fetch("http://localhost:4000/auth/signup",{
            method:"POST",
            headers: {
                Accept:"application/json",
                "Content-Type":"application:json"
            }, 
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json() ;
        })
        .catch (err => console.log(err));    }
    render(){
        return(
            <section className="hero">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <article className="media box is-white is-full-height">
                            <div className="media-content">
                                <div className="content">
                                    <span className="button is-static is-fullwidth is-large">Get Started for Free</span>
                                    <div className="section ">
                                        <h1 className="title is-4">
                                            Sign up & Match with your trainer
                                        </h1>
                                        <h2 className="title is-5">30-Day Money-Back Guarantee</h2>
                                    </div>
                                    <figure className="image is-hidden-mobile imageSize center" >
                                        <img src={BgImage} alt="background" className=" "  />
                                    </figure>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="column is-5-tablet is-5-desktop is-6-widescreen">
                        <form action="" className="box">
                            <div className="media-content   ">
                                <div className="content">
                                    <span className="button is-fullwidth is-large is-static">Sign up!</span>
                                </div>
                            </div>
                            <div className="section">
                                <div className="field">
                                    <label htmlFor="" className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email" placeholder="e.g. johnsmith@gmail.com"
                                            className="input is-rounded" required onChange={this.handleChange("email")} value={this.state.email} />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="" className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="*******" className="input is-rounded"
                                            required onChange={this.handleChange("password")}
                                            value={this.state.password}/>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="" className="checkbox is-rounded">
                                        <input type="checkbox" />
                                        &nbsp;Remember me
                                    </label>
                                </div>

                                <div className="field">
                                    <Link to="" className="button is-rounded is-success is-fullwidth" onClick={this.clickSubmit}>
                                        Sign up
                                    </Link>
                                </div>
                                <hr />
                                <p className="has-text-centered has-text-grey-lighter is-size-5">
                                    --or--
                                </p>
                            </div>

                            <div className="field">
                                <Link to="" className="button is-rounded is-medium is-fullwidth">
                                    <img width="20px" alt='Google "G" Logo'
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                    &nbsp;Login with Google
                                </Link>
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

export default SignUp;