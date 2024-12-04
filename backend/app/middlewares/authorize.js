// hof - higher order function 
// accepts another function as an argument or returns a function as a value
const authorizeUser = (permittedRoles) => {
    return (req, res, next) => {
        if(permittedRoles.includes(req.currentUser.role)) {
            next(); 
        } else {
            return res.status(403).json({ errors: 'unauthorized access'}); 
        }
    }
}

export default authorizeUser;

/*


*/