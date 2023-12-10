const Router = require('express')
const router = new Router()

const modules = ['user', 'pokemon', 'article']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router
