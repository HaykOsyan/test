const Router = require('express')
const router = new Router()
const MessageController = require('../controllers/MessageController')
// const authMiddleware = require('../middleware/authMiddleware')

router.post('/save', MessageController.create)
router.get('/show', MessageController.getAll)

module.exports = router