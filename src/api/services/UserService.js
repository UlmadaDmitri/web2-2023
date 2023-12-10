const UserModel =  require('../../models/UserModel.js')

class UserService {

    async create(item) {
        await UserModel.create(item);
    }

    async delete(id) {
        await UserModel.findByIdAndDelete(id);
    }

    async findOne(email) {
        const [ user ] = await UserModel.find({ email: email });
        return user;

    }

}

module.exports = new UserService()