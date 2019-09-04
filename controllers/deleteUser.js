const user = require('../database/models/User')

module.exports = (req , res ) => {


    user.findOneAndRemove({_id: req.params.id},
        function(error , User){

            if(error){
                res.render('/auth/distubitors')
                console.log(error)
            }
            else {
                res.redirect('/auth/distubitors')
            }
        }
        )


}