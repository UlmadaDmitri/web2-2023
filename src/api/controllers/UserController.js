const UserService = require('../services/UserService');

class UserController {
    async create(request, response) {
        try {
            const result = await UserService.create(request.body);
            response.send(result);
        } catch (error) {
            if (error.code === 11000) {
                response.status(400).send('User already exists');
            } else {
                response.status(500).send('Internal Server Error');
            }
        }
    }

    async delete(request, response) {
        response.send(await UserService.delete(request.params.id));
    }
}

module.exports = new UserController();
