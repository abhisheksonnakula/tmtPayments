const Post = require('../database/models/Post')
const axios = require('axios')

module.exports = async (req, res) => {
  const posts = await Post.find({}).populate('author');
  let getBalance;
  await axios.post('https://uat.go.ooo/agent/dmtapi/getBalance', {
    partner_code: 'WEPAY',
    mobile_number: '9700000402',
    password: 'tEuhYrTBwA',
    wallet_id: 'GoWalletPartner'
  })
  .then((response) => {
    console.log("succ")
    console.log((response.data.response_code));
    getBalance = response.data;
    console.log(getBalance);
    return getBalance;
  })
  .catch((error) => {
    console.log("err")
    console.error(error)
  })
  res.render("index", {
    posts,getBalance
  });
}