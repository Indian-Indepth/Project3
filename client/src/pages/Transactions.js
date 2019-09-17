import React, { Component } from "react";
import AsideTrainer from "../components/AsideTrainer";
import "../assets/css/style.css";
import BottomNavTrainer from "../components/BottomNavTrainer";
import API from "../utils/API";
import { saveAs } from 'file-saver';

class Transactions extends Component {

  state = {
    user: {},
    error: null,
    authenticated: false,
    submitted: false,
    transactions: {}
  };


  createAndDownloadPdf = (txnId) => {
    console.log("CreateAndDownloadPDF");
    console.log(txnId);
    API.createPDF(txnId)
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }


  componentDidMount () {
    API.getTransactions()
      .then(response => {
        if (response.status === 200) {
          return response.data;
        }else {
          throw new Error("failed to fetch transaction");
        }
      })
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          transactions: responseJson
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if(!this.state.transactions){
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      var txns = this.state.transactions;

      let menuItems = [];
      for (var i = 0; i < txns.length; i++) {
          menuItems.push(<li>{txns[i].transactionId}</li>);
          menuItems.push(<button className="button" onClick={this.createAndDownloadPdf(txns[i]._id)}>Create PDF</button>);
      }

      return (
        <section className='main-content columns is-fullheight'>
          <AsideTrainer />
          <div className='box column is-10 has-background-white-bis'>
            <section className='section'>
              <div className='section notification is-primary'>
              {menuItems}
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
