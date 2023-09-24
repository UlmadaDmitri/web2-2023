const UserService = require('../services/UserService')

class UserController {

    async create(request, response) {
        response.send(await UserService.create(request.body))
    }

    async delete(request, response) {
        response.send(UserService.delete(request.params.id))
    }
    
}

module.exports = new UserController()