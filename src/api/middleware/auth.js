const jwt = require('jsonwebtoken');

const AuthMiddleware = () => (req, res, next) => {
    const AuthHeader = req.headers.authorization;
    console.log(AuthHeader)
    if (AuthHeader) {
        const token = AuthHeader.split(' ')[1];
        console.log(token)
        if (!token) {
            return res.status(403).send('Unauthorized');
        }
        jwt.verify(token, 'your_secret_key', (err, decoded) => {
            if (err) {
                return res.status(403).send('Unauthorized');
            }
            req.user = decoded;
            next();
        });
    } else {
        // Если заголовок авторизации отсутствует, необходимо решить, что делать.
        // В данном случае, вы можете просто перейти к выполнению следующего middleware.
        next();
        }
}

module.exports = AuthMiddleware;