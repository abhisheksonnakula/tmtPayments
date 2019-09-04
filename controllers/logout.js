const User = require('../database/models/User')

module.exports = async (req, res) => {

  const date = new Date;
  console.log(date);

 await User.findByIdAndUpdate({_id:req.session.userId},
            {

              lastlogin: date
                
            })
  req.session.destroy(() => {
    res.redirect('/')
  })
}