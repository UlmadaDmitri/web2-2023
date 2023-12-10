const UserModel =  require('../../models/UserModel.js')

class UserService {

    async create(item) {
        await UserModel.create(item);
    }

    async delete(id) {
        await UserModel.findByIdAndDelete(id);
    }

    async findOne(email) {
        await UserModel.findOne({ email });
    }

}

module.exports = new UserService()