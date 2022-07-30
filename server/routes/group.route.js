const router = require('express').Router();

const GroupController = require('../controllers/group.controller');

router.post('/', GroupController.createGroup);
router.post('/:id/user', GroupController.addUserToGroup);

module.exports.groupRoute = router;
