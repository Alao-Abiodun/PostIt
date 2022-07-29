const router = require('express').Router();

const GroupController = require('../controllers/group.controller');

router.post('/', GroupController.createGroup);

module.exports.groupRoute = router;
