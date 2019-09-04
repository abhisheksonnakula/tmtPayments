const User = require('../database/models/User')
const path = require("path")

module.exports = (req, res) => {


  const { role } = req.body;

  const { idproof, profilePicture, addressproof } = req.files;

  var unique = uidGenerate();

  function uidGenerate(){
  if (role === "admin") {
    var uni = "TMTA" + Math.floor(Math.random() * (999 - 100) + 100);
  }

  if (role === "user") {
    var uni = "TMT" + Math.floor(Math.random() * (9999 - 1000) + 1000);
  }
  unique = uni;
  return uni;
}


User.findOne({ unique }, (error, user) => {

  if(user){
    uidGenerate();
  }
  if(!user){
  if (idproof) {
    idproof.mv(path.resolve(__dirname, '..', 'public/proofs', idproof.name));
    id = `/proofs/${idproof.name}`
  }
  else {

    id = `/images/logo.png`;

  }

  if (profilePicture) {
    profilePicture.mv(path.resolve(__dirname, '..', 'public/proofs', profilePicture.name));
    pp = `/proofs/${profilePicture.name}`;
  } else {
    pp = `/images/logo.png`;
  }
  if (addressproof) {

    addressproof.mv(path.resolve(__dirname, '..', 'public/proofs', addressproof.name));
    ap = `/proofs/${addressproof.name}`;

  } else {
    ap = `/images/logo.png`;
  }

  User.create({
    ...req.body,
    uniqueId: unique,
    idproof: id,
    profilePicture: pp,
    addressproof: ap
  }, (error, post) => {
    if (error) {
      req.flash('RegistrationUnSuccess', "you have Not registered")
      res.redirect("/register");

    }
    else {

      req.flash('RegistrationSuccess', "you have registered")
      res.redirect("/register");

    }
  });
}
})

};

