const jwt = require("jsonwebtoken");
require('dotenv').config();

funnction jwtGenerator(){
    const payload = {
        user: user_id
    }
    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "1hr"})

}

module.exports = jwtGenerator;