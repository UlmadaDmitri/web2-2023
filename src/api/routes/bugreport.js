const Router = require("express");
const router = new Router();
const BugreportController = require('../controllers/BugreportController');
const AuthMiddleware = require("../middleware/auth");

router.post('/', AuthMiddleware(), BugreportController.create)
router.delete('/:id', AuthMiddleware(), BugreportController.delete)
router.put('/:id', AuthMiddleware(), BugreportController.update)


module.exports = router