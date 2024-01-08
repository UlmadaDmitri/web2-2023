const PokemonService = require('../services/PokemonService');

class PokemonController {
    async create(request, response) {
        try {
            const result = await PokemonService.create(request.body);
            response.send(result);
        } catch (error) {
            if (error.code === 11000) {
                response.status(400).send('Pokemon already exists');
            } else {
                response.status(500).send('Internal Server Error');
            }
        }
    }

    async delete(request, response) {
        response.send(await PokemonService.delete(request.params.id));
    }

    async update(request, response) {
        response.send(await PokemonService.update(request.body, request.params.id));
    }
}

module.exports = new PokemonController();