import React, { Component } from "react";
import AsideTrainer from "../components/AsideTrainer";
import "../assets/css/style.css";
import BottomNavTrainer from "../components/BottomNavTrainer";
import API from "../utils/API";
import { saveAs } from "file-saver";

class Transactions extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false,
    submitted: false,
    transactions: [],
  };

  componentDidMount() {
    API.getTransactions()
      .then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error("failed to fetch transaction");
        }
      })
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          authenticated: true,
          transactions: responseJson,
        });
        //console.log(this.state);
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user",
        });
      });
  }

  createAndDownloadPdf = txnId => {
    console.log("CreateAndDownloadPDF");
    console.log(txnId);
    API.createPDF(txnId).then(res => {
      console.log(res);
      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      saveAs(pdfBlob, "newPdf.pdf");
    });
  };

  apple = (google) => {
    console.log('apple google: '+google);
  }

  handleSubmit = (event, id) => {
    event.preventDefault();
  };

  render() {
    if (!this.state.transactions) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <section className='main-content columns is-fullheight'>
          <AsideTrainer />
          <div className='box column is-10 has-background-white-bis'>
            <section className='section'>
              <div className='section notification '>

                {this.state.transactions.map((txn, i) => (
                  <div className="box">
                  <div className="box">
                  <h1 className='subtitle is-5'>
                      Transaction ID:
                      <span className='has-color-primary'>
                        {txn.transactionId}
                      </span>
                    </h1>

                    <h1 className='subtitle is-5'>Billing Address: {txn.billingAddress}</h1>

                    <h1 className='subtitle is-5'>Amount: {txn.amount}</h1>
                    <button
                      type='button'
                      className='button is-primary is-text-right	is-clearfix'
                      onClick={this.createAndDownloadPdf.bind(this, txn._id)}
                    >
                      Create PDF
                    </button>

                  </div>




                  </div>
                ))}

              </div>
            </section>
          </div>
          <BottomNavTrainer />
        </section>
      );
    }
  }
}

export default Transactions;
