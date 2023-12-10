const UserModel =  require('../../models/UserModel.js')

class AuthService {

    async register(item){
        await UserModel.create(item);
    }

    async login(id){
        await UserModel.findByIdAndDelete(id);
    }

}

module.exports = new AuthService()