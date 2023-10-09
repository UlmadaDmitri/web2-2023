const PokemonModel =  require('../../models/PokemonModel.js')

class PokemonService {

    async create(item){
        await PokemonModel.create(item);
    }

    async delete(id){
        await PokemonModel.findByIdAndDelete(id);
    }

    async update(item, id){
        await PokemonModel.updateOne({_id:id}, item)
    }
}

module.exports = new PokemonService()