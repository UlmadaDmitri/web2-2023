const BugreportService = require('../services/BugreportService')

class BugreportController {

    async create(request, response) {
        response.send(await BugreportService.create(request.body))
    }

    async delete(request, response) {
        response.send(BugreportService.delete(request.params.id))
    }

    async update(request, response) {
        response.send(await BugreportService.update(request.body, (request.params.id)))
    }
}

module.exports = new BugreportController()