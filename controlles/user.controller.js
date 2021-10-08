const User = require('../dataBase/User');
const { userServise } = require('../servises');

module.exports = {
    getSingleUsers: (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        try {
            const createdUser = await userServise.createdUser(User, req.body);

            res.json(createdUser);
        } catch (e) {
            next(e);
        }
    },
    getAllUsers: async (req, res, next) => {
        try {
            const { allUsers } = req;
            const users = await userServise.findAllUser(User, allUsers);

            res.json(users);
        } catch (e) {
            next(e);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            await userServise.deleteOneUser(User, user_id);

            res.json(`User with id ${user_id} is deleted`);
        } catch (e) {
            next(e);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const newUser = req.body;

            await userServise.updateUserById(User, user_id, newUser);

            res.json(`User with id ${user_id} is update`);
        } catch (e) {
            next(e);
        }
    }
};
