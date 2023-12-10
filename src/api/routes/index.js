const Router = require('express')
const router = new Router()

const modules = ['user', 'pokemon', 'article', 'auth']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router
