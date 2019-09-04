const User = require('../database/models/User')
const bcrypt = require('bcrypt')

const salt = bcrypt.genSaltSync(10)



module.exports = (req, res) => {

    const pas = bcrypt.hashSync(req.body.password, salt)


    User.findByIdAndUpdate({_id:req.session.userId},
            {

                password: pas
                
            },

            (error, user) => {
                if (error) {
                    res.redirect('/auth/viewProfile')
                }
                else {
                    res.redirect('/auth/viewProfile')

                }


            })
}