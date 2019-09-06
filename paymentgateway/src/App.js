import React, {Component}  from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './components/CheckoutForm';


class App extends Component {
  render() {
    return (
      <div className="container">
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>React Stripe Payment Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      </div>
    );
  }
}

export default App;
