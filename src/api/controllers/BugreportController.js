const BugreportService = require('../services/BugreportService');

class BugreportController {
    async create(request, response) {
        try {
            const result = await BugreportService.create(request.body);
            response.send(result);
        } catch (error) {
            if (error.code === 11000) {
                response.status(400).send('Bugreport already exists');
            } else {
                response.status(500).send('Internal Server Error');
            }
        }
    }

    async delete(request, response) {
        response.send(await BugreportService.delete(request.params.id));
    }

    async update(request, response) {
        response.send(await BugreportService.update(request.body, request.params.id));
    }
}

module.exports = new BugreportController();
