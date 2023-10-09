const Router = require("express");
const router = new Router();
const ArticleController = require('../controllers/ArticleController');

router.post('/', ArticleController.create)
router.delete('/:id', ArticleController.delete)
router.put('/:id', ArticleController.update)


module.exports = router