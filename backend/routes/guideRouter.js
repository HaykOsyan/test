const Router = require('express')
const router = new Router()
const GuideController = require('../controllers/guideController')
// const authMiddleware = require('../middleware/authMiddleware')

router.get('/image', GuideController.getImage)
router.get('/file', GuideController.getZipFile)

module.exports = router