const jwt = require('jsonwebtoken');

const verifyToken = token =>{
    return new Promise((resolve, reject) =>{
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err,user)=>{
            if(err) return reject(err);

            if(user) return resolve(user);
        });
    })
}

const authenticate = async function(req,res, next)
{
    bearerToken = req?.headers?.authorization

    if(!bearerToken || ! bearerToken.startsWith('Bearer'))
    {
        return res.status(400).send({status:"faild", message:"Please send the bearer token!"})
    }

    const token = bearerToken.split(" ")[1]
 
    let user;
    try {
         user = await verifyToken(token);

    } catch (error) {
        return res.status(400).send({status:"faild", message:"Please send a valid bearer token!"})
    }

    req.user= user;
    
    next();

}

module.exports = authenticate;