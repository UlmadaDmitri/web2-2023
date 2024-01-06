const BugreportModel =  require('../../models/BugreportModel.js')

class PokemonService {

    async create(item){
        await BugreportModel.create(item);
    }

    async delete(id){
        await BugreportModel.findByIdAndDelete(id);
    }

    async update(item, id){
        await BugreportModel.updateOne({_id:id}, item)
    }
}

module.exports = new PokemonService()