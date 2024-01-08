const Router = require("express");
const router = new Router();
const BugreportController = require('../controllers/BugreportController');

router.post('/', BugreportController.create)
router.delete('/:id', BugreportController.delete)
router.put('/:id', BugreportController.update)


module.exports = router