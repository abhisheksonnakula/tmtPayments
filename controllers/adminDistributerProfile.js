const User = require('../database/models/User')


module.exports = async (req, res) => {
  const users = await User.findOne({_id: req.params.id}).populate('author');
    res.render('adminDistributerProfile',{
      users
    })
  }