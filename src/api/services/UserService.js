const UserModel =  require('../../models/UserModel.js')

class UserService {

    async create(item){
        await UserModel.create(item);
    }

    async delete(id){
        await UserModel.findByIdAndDelete(id);
    }

}

module.exports = new UserService()