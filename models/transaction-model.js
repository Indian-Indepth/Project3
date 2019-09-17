const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  userId: String,
  transactionId: String,
  amount: String,
  transactionType: String,
  billingAddress: String,
});

const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;
