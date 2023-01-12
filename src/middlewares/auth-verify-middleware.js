const jwt = require('jsonwebtoken');

module.exports=(req, res, next)=>{
    let Token = req.headers['token-key'];

    jwt.verify(Token,'secretKey123', (err,decoded)=>{
        if(err){
            res.status(401).json({status:"unauthorized"});
        }
        else {
            // Get user name from decoded token & add with req header
            let username = decoded['data']['UserName'];
            req.headers.username=username;
            next();
        }
    });

}