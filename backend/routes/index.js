const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const weatherRouter = require('./weatherRouter')
const guideRouter = require('./guideRouter')
const messageRouter = require('./messageRouter')

router.use('/user', userRouter)
router.use('/weather', weatherRouter)
router.use('/guide', guideRouter)
router.use('/message', messageRouter)

module.exports = router