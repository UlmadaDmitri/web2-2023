const Router = require("express");
const router = new Router();

const UserController = require('../controllers/UserController');
const AuthMiddleware = require("../middleware/auth");

router.post('/', AuthMiddleware(), UserController.create)
router.delete('/:id', AuthMiddleware(), UserController.delete)

module.exports = router