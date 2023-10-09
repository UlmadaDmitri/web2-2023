const BugreportModel =  require('../../models/BugreportModel.js')

class BugreportService {

    async create(item){
        await BugreportModel.create(item);
    }

    async delete(id){
        await BugreportModel.findByIdAndDelete(id);
    }

    async update(item, id){
        await BugreportModel.update(item. id)
    }
}

module.exports = new BugreportService()