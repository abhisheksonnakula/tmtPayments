const User = require('../database/models/User')
const bcrypt = require('bcrypt')

const salt = bcrypt.genSaltSync(10)



module.exports = (req, res) => {

    const pas = bcrypt.hashSync(req.body.password, salt)


    User.findByIdAndUpdate({ _id: req.params.id },
            {
                name: req.body.name,
                email: req.body.email,
                uniqueId: req.body.uniqueId,
                password: pas,
                number: req.body.number,
                pan: req.body.pan,
                shopname: req.body.shopname,
                pincode: req.body.pincode,
                contactaddress: req.body.contactaddress,
                shopaddress: req.body.shopaddress,
                KYCStatus: req.body.KYCStatus,
                memberstatus: req.body.memberstatus,
                role: req.body.role
                
            },

            (error, user) => {
                if (error) {
                    res.redirect('/auth/distubitors')
                }
                else {
                    res.redirect('/auth/distubitors')

                }


            })
}