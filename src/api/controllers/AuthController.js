const AuthService = require('../services/AuthService')

class AuthController {

    async register(request, response) {
        response.send(await AuthService.create(request.body))
    }

    async login(request, response) {
        response.send(AuthService.delete(request.params.id))
    }

}

module.exports = new AuthController()