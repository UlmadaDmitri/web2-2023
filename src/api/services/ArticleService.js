const ArticleModel =  require('../../models/ArticleModel.js')

class ArticleService {

    async create(item){
        await ArticleModel.create(item);
    }

    async delete(id){
        await ArticleModel.findByIdAndDelete(id);
    }

    async update(item, id){
        await ArticleModel.update(item. id)
    }
}

module.exports = new ArticleService()