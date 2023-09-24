const Router = require("express");
const router = new Router();

const UserController = require('../controllers/UserController');

router.post('/', UserController.create)
router.delete('/:id', UserController.delete)

module.exports = router