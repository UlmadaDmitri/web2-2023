const Router = require("express");
const router = new Router();
const ArticleController = require('../controllers/ArticleController');
const AuthMiddleware = require("../middleware/auth");

router.post('/', AuthMiddleware(), ArticleController.create)
router.delete('/:id', AuthMiddleware(), ArticleController.delete)
router.put('/:id', AuthMiddleware(), ArticleController.update)


module.exports = router