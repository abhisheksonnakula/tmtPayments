const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  uniqueId:{
    type: String,
    unique: true,
  },
  password: {
    type: String
  },
  number: {
    type: String
  },
  pan: {
    type: String
  },
  shopname: {
    type: String
  },
  pincode: {
    type: String
  },
  contactaddress: {
    type: String
  },
  shopaddress: {
    type: String
  },
  KYCStatus: {
    type: String
  },
  memberstatus: {
    type: String
  },
  role: {
    type: String
  },
  lastlogin: {
    type: Date,
    default: new Date()
  },
  idproof: {
    type: String
  },
  addressproof: {
    type: String
  },
  profilePicture: {
    type: String
  }
})

UserSchema.pre('save', function(next) {
  const user = this

  bcrypt.hash(user.password, 10, function (error, encrypted) {
    user.password = encrypted
    next()
  })
})

module.exports = mongoose.model('User', UserSchema)
