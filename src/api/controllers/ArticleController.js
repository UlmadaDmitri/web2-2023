const ArticleService = require('../services/ArticleService');

class ArticleController {
    async create(request, response) {
        try {
            const result = await ArticleService.create(request.body);
            response.send(result);
        } catch (error) {
            if (error.code === 11000) {
                response.status(400).send('Article already exists');
            } else {
                response.status(500).send('Internal Server Error');
            }
        }
    }

    async delete(request, response) {
        response.send(await ArticleService.delete(request.params.id));
    }

    async update(request, response) {
        response.send(await ArticleService.update(request.body, request.params.id));
    }
}

module.exports = new ArticleController();

