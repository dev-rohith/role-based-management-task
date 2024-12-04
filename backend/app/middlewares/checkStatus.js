// redis - cache
/*
    {
        dct123: true,
        dct124: false,
        dct125: true 
    }
*/


import User from "../models/user-model.js"
const checkAccountStatus =  async (req, res, next) => {
    const user = await User.findById(req.currentUser.userId) 
    if(user.status == 'active') {
        next();
    } else {
        return res.status(403).json({ errors: 'your account is deactivated, please contact the admin'}); 
    }
}

export default checkAccountStatus