const jwt = require('jsonwebtoken');
const configs = require('./config');

const protect = (req, res, next) => {
   
    const authHeader = req.headers.authorization;

   
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1]; 

        try {
           
            const decoded = jwt.verify(token, configs.JWT_SECRET);
            
           
            req.user = decoded.id; 
            next();
        } catch (error) {
            res.status(401).json({ message: "Invalid Token" });
        }
    } else {
        res.status(401).json({ message: "No Token Provided" });
    }
};

module.exports = protect;