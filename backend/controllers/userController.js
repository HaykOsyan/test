const ApiError = require('../error/ApiError')
const bcript = require('bcrypt')
const {User} = require('../models/models')
const jwt = require('jsonwebtoken')


const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
        )
}

class UserController {

    async registration (req,res, next) {
        const {email, password} = req.body
        if(!email || !password){
                return next(ApiError.badRequest('wrong password or email'))
            }
        const registeringUser = await User.findOne({where:{email}})
        if(registeringUser){
            return next(ApiError.badRequest('email Used'))
        }
        const hashPassword = await bcript.hash(password,5)
        const user = await User.create({email, password:hashPassword})
        const token = generateJwt(user.id, user.email)
        return res.json(token)
    }

    async login (req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            next(ApiError.internal('no user with such email'))
        }
        let comparePassword = bcript.compareSync(password, user.password)
        if(!comparePassword){
            next(ApiError.internal('wrong email or password'))
        }
        const token = generateJwt(user.id, user.email)
        return res.json(token)
    }

    async check (req, res) {
        const token = generateJwt(req.user.id, req.user.email)
        return res.json(token)
    }
}

module.exports = new UserController()