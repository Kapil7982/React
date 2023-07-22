const authorize = (permittedRoles) => async function (req, res, next){

    const {user} = req.user;

    const roles = user.roles;

    console.log("roles", roles);

    console.log("permittedroles", permittedRoles);

    const is_Permitted = permittedRoles.filter(role => roles.includes(role));

    if(is_Permitted.length >0)
    {
       /// console.log("is permitted");
        next();
    }
    else
    {
        //console.log("is not permitted");
        return res.status(403).send({status:"faild", message:"permitted denied"});
    }

    
}

module.exports = authorize;