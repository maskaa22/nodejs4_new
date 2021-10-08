module.exports = {
    getUserLogin: (req, res, next) => {
        try {
            res.json('Go to /users');
        } catch (e) {
            next(e);
        }
    },
    postUserLogin: (req, res, next) => {
        try {
            res.json('OK');
        } catch (e) {
            next(e);
        }
    }
};
