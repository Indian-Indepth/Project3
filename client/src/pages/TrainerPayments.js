import React, { Component } from "react";
import AsideTrainer from "../components/AsideTrainer";
import API from "../utils/API";
import BottomNavTrainer from "../components/BottomNavTrainer";
import "../assets/css/style.css";
import DropIn from "braintree-web-drop-in-react";
import { Redirect } from "react-router-dom";

class TrainerPayments extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false,
    submitted: false,
    showing: false
  };

  async componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    API.loginSuccess()
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error("failed to authenticate user");
        }
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user,
        });
        API.getPackages().then(pResponse => {
          if (pResponse.status === 200) {
            let packageType = {};
            if (this.state.user.userType === "Trainee") {
              packageType.free = pResponse.data[0];
              packageType.paid = pResponse.data[1];
            } else {
              packageType.free = pResponse.data[2];
              packageType.paid = pResponse.data[3];
            }
            this.setState({
              package: packageType,
            });

            // Get payment token
            API.getBraintreeClientToken(this.state.user._id)
               .then(PayResponse => {
              if (PayResponse.status === 200) {
                this.setState({
                  clientToken: PayResponse.data.clientToken,
                });
              } else {
                throw new Error("failed to get packages");
              }
            });

          } else {
            throw new Error("failed to get packages");
          }
        });

      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user",
        });
      });
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    window.open("http://localhost:4000/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  handleSubmit = (event, id) => {
    event.preventDefault();

  };

  async pay() {
    // Send the nonce to your server
    const { nonce } = await this.instance.requestPaymentMethod();
    API.processPayment(this.state.user._id, this.state.clientToken, nonce, this.state.package.paid.price, this.state.billingAddress)
    .then(response => {
      this.setState({ submitted: true });
    })
    .catch();
  }


  render() {
    const { showing } = this.state;
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to='/' />;
    }

    if(!this.state.clientToken){
      return (
        <div>
        {redirect}
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <section className='main-content columns is-fullheight'>
        {redirect}
          <AsideTrainer />
          <div className='box column is-10 has-background-white-bis'>
            <form onSubmit={this.handleSubmit}>
              <article className='box'>
                <div className=''>
                  <div className='content'>
                    <section className='section'>
                      <div className='field'>
                        <label className='label'>Select your package:</label>
                        <div className='control'>
                          <div className='box'>
                            <input
                              type='radio'
                              name='userSubType'
                              value='free'
                              id='free'
                              checked
                              onChange={() => this.setState({ showing: false })}
                            />
                            &nbsp; <label htmlFor="free">Free - &nbsp;
                            {this.state.package
                              ? this.state.package.free.description
                              : ""}</label>
                              <div className='section'>
                        <a
                          type='submit'
                          //onClick={this.pay.bind(this)}
                          className='button is-pulled-right is-warning is-large'
                          href="/"
                        >
                          Proceed as a free customer&emsp;
                          <span>
                            <i className='fas fa-chevron-right'></i>
                          </span>
                        </a>
                      </div>
                          </div>

                          <div className='box'>
                            <input
                              type='radio'
                              name='userSubType'
                              value='paid'
                              id='paid'
                              onChange={() => this.setState({ showing: true })}
                            />
                            &nbsp; <label htmlFor="paid"> Paid - &nbsp;
                            {this.state.package
                              ? this.state.package.paid.description
                              : ""}</label>
                          </div>
                        </div>

                      </div>



                      <div style={{ display: (showing ? 'block' : 'none') }}>
                      <div className="box" >
                        <div className='field'>
                        Type your billing address here: <br />

                          <textarea
                            className='textarea'
                            name='billingAddress'
                            onChange={this.handleChange}
                            placeholder='Type your billing address here...'
                            rows="3"
                            cols='100'
                          ></textarea>
                          <input type="hidden" value={this.state.package.paid.price} />
                        </div>
                        <DropIn
                          options={{ authorization: this.state.clientToken }}
                          onInstance={instance => (this.instance = instance)}
                        />
                      </div>
                      <div className=''>

                        <button
                          type='submit'
                          onClick={this.pay.bind(this)}
                          className='button is-pulled-right is-warning is-large'
                        >
                          Pay Now&emsp;
                          <span>
                            <i className='fas fa-chevron-right'></i>
                          </span>
                        </button>

                      </div>
                      </div>


                    </section>
                  </div>
                </div>
              </article>
            </form>
          </div>
          <BottomNavTrainer />
        </section>
      );
    }

  }
}

export default TrainerPayments;
