const jwt = require('jsonwebtoken');

const AuthMiddleware = () => (req, res, next) => {
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        const authorization = req.headers.authorization;

        if (authorization) {
            const token = authorization.split(' ')[1];

            if (!token) {
                return res.status(403).json({message: "User is not authenticated"});
            }

            const { email } = jwt.verify(token, 'your_secret_key');
            if (!email) {
                return res.status(403).json({message: "Email is not valid"});
            }
        }

        next();
    } catch (e) {
        return res.status(403).json({message: "User is not authenticated"});
    }
}

module.exports = AuthMiddleware;