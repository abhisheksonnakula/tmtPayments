const User = require('../database/models/User')

module.exports = async (req, res) => {

  const users = await User.findById(req.session.userId).populate('author');
  const allusers =  await User.find({});
    res.render('register',{
      users,allusers
    })
  }
  