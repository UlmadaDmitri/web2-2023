const PokemonService = require('../services/PokemonService')

class PokemonController {

    async create(request, response) {
        response.send(await PokemonService.create(request.body))
    }

    async delete(request, response) {
        response.send(PokemonService.delete(request.params.id))
    }

    async update(request, response) {
        response.send(await PokemonService.update(request.body, Number(request.params.id)))
    }
}

module.exports = new PokemonController()