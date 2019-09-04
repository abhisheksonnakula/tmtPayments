const bcrypt = require('bcrypt')
const User = require('../database/models/User')

module.exports = (req, res) => {
  const { uniqueId , number , password } = req.body;


  User.findOne({ uniqueId }, (error, user) => {
    if (user) {
      if(number === user.number){
      // compare passwords.
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          req.session.userId = user._id
          req.session.role = user.role
          req.flash('loginSucces','You Are Logged In')
          res.redirect('/auth/login')
        } else {
          req.flash('IncorrectPwd','You Have Entered an Incorrect Password')
          res.redirect('/')  
        }
      })
    }
    else { 
      
      return req.flash('IncorrectMobile','You Have Entered an Incorrect Mobile Number'),res.redirect('/')
    }
    } else { 
      
      return req.flash('IncorrectUiD','You Have Entered an Incorrect Unique ID'),res.redirect('/')
    }
  })
}
