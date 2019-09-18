import React from "react";

const Receipt = props => {
  return (
    <h1 className='title is-5'>
            Transaction ID:
            <span className='has-color-primary'>{txns.transactionId}</span>
          </h1>

          <h1 className='title is-5'>{txns.billingAddress}</h1>

          <h1 className='title is-5'>{txns.amount}</h1>
            <button type='button' className='button'
                onClick={this.createAndDownloadPdf(txns._id)}
            >Create PDF</button>
  );
};

export default Receipt;
