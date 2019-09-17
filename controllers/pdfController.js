const db = require("../models");
const pdf = require('html-pdf');
const pdfTemplate = require('../documents');
const path = require('path');

// Defining methods
module.exports = {
  findById: function(req, res) {
    db.Transaction
      .findById(req.params.id)
      .then(dbModel => {

        db.User.findById(dbModel.userId)
        .then(userModel => {
          pdf.create(pdfTemplate({name:userModel.name,price:dbModel.amount,receiptId:dbModel.transactionId, phone: userModel.phoneNumber, billingAddress: dbModel.billingAddress, txnId: dbModel.transactionId }), {}).toFile('result.pdf', (err) => {
            if(err) {
                res.send(Promise.reject());
            } else {
              res.sendFile(path.resolve(`${__dirname}/../result.pdf`));
            }
          });
        }).catch(err=>res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  }
};