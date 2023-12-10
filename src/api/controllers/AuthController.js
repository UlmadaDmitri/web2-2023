const AuthService = require('../services/AuthService')
const bcrypt = require('bcrypt');
const UserService = require('../services/UserService')
const jwt = require('jsonwebtoken');

class AuthController {

    async register(request, response) {
        const { username, password, email } = request.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = { username, password: hashedPassword, email };
            response.send(await AuthService.register(user));
        } catch (error) {
            console.error(error);
            response.status(500).send('Error while registering');
        }
    }

    async login(request, response) {
        const { email, password } = request.body;
        try {
            const user = await UserService.findOne(email);
            if (!user) {
                return response.status(401).send('Authentication failed');
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return response.status(401).send('Authentication failed');
            }

            const token = jwt.sign({ username: user.username, email: user.email }, 'your_secret_key', { expiresIn: '1h' });
            response.json({ token });
        } catch (error) {
            console.error(error);
            response.status(500).send('Authentication failed');
        }
    }

}

module.exports = new AuthController()