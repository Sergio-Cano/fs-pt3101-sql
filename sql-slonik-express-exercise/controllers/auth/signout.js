const { cookie } = require("simple-stateless-auth-library");

//Ejercicio 17
module.exports = () => async (req,res,next) => {
    cookie.clear(res);
    
    res.status(200).json({
        success: true
    })
}