const Router = require('express')
const router = new Router()
const WeatherController = require('../controllers/weatherController')
// const authMiddleware = require('../middleware/authMiddleware')

router.get('/', WeatherController.get)

module.exports = router