const Router = require("express");
const router = new Router();
const PokemonController = require('../controllers/PokemonController');

router.post('/', PokemonController.create)
router.delete('/:id', PokemonController.delete)
router.put('/:id', PokemonController.update)


module.exports = router