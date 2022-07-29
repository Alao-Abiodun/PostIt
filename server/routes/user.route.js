const router = require('express').Router();

const UserController = require('../controllers/user.controller');

// router.get('/', UserController.getAll);
// router.get('/:id', UserController.getById);
router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);
// router.put('/:id', UserController.update);
// router.delete('/:id', UserController.delete);

module.exports.userRoute = router;
