const ArticleService = require('../services/ArticleService')

class ArticleController {

    async create(request, response) {
        response.send(await ArticleService.create(request.body))
    }

    async delete(request, response) {
        response.send(ArticleService.delete(request.params.id))
    }

    async update(request, response) {
        response.send(await ArticleService.update(request.body, Number(request.params.id)))
    }
}

module.exports = new ArticleController()