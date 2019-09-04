var easebuzz = require("../easebuzz/easebuzz/easebuzz")
var env = "live"  //USE "live" For PROD Env.

module.exports = (req, res) => {
console.log("handle")
console.log(res)
console.log(easebuzz.response_json)
  
easebuzz.validateResponse(req,function(error,response_json){
    console.log("in callback")
    console.log(response_json)
    console.log(error)
    if(error)
    {
        console.log("Hash Mismatch")
            res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': 100
        });
        res.write("Hash Mismatch.");
        res.end();

    }
    else
    {
        if(response_json.status=='success')
        {
            message="Transaction Success"
            console.log("Success")
            res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': message.length
            });
            res.write(message);
            res.end();
        }
        else if(response_json.status=="failure")
        {
            message="Transaction Failed"
            console.log("Failed")
            res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': message.length
            });
            res.write(message);
            res.end();
        }
        else if(response_json.status=="userCancelled")
        {
            message="User Cancelled"
            console.log("User Cancelled")
            res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': message.length
            });
            res.write(message);
            res.end();
        }
    }
})		
}