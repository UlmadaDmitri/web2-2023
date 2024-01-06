const Router = require("express");
const router = new Router();
const PokemonController = require('../controllers/PokemonController');
const AuthMiddleware = require('../middleware/auth.js')


router.post('/', AuthMiddleware(), PokemonController.create)
router.delete('/:id', AuthMiddleware(), PokemonController.delete)
router.put('/:id', AuthMiddleware(), PokemonController.update)


module.exports = router