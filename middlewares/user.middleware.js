const User = require('../dataBase/User');
const ErrorHandler = require('../errors/errorHandler');
const service = require('../servises');

module.exports = {
    isUserPresent: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            const user = await service.userServise.findUserById(User, user_id);

            if (!user) {
                throw new ErrorHandler(418, 'user not found');
            }
            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    },
    checkUniqueEmail: async (req, res, next) => {
        try {
            const { email } = req.body;

            const userByEmail = await User.findOne({ email });

            if (userByEmail) {
                throw new ErrorHandler(409, `Email ${email} is already exist`);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
