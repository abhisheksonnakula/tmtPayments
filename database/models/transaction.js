const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
 hash: {
    type: String,
  },
  cardCategory:{
    type: String,
  },
  firstname:{
    type: String,
  },
  net_amount_debit:{
    type: String,
  },
  payment_source:{
    type: String,
  },
  error_Message:{
    type: String,
  },
  phone:{
    type: String,
  },
  easepayid:{
    type: String,
  },
  unmappedstatus:{
    type: String,
  },
  addedon:{
    type: String,
  },
  status:{
    type: String,
  },
  easepayid:{
    type: String,
  },
  txnid:{
    type: String,
  },
  amount:{
    type: Number,
  },
  error:{
    type: String,
  },
  email:{
    type: String,
  },
  count:{
      type: String,
  },
  udf1:{
      type: String
  }
})

module.exports = mongoose.model('Transactions', TransactionSchema)
