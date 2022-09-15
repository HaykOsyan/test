const {Message} = require('../models/models')
const ApiError = require('../error/ApiError')

class MessageController {

    async create (req,res,next) {
        try {
            const {text, userId} = req.body
            const message = await Message.create({text, userId})
            return res.json({message})
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll (req,res) {
        const messages = await Message.findAll()
        return res.json({messages})

    }

    // async getOne (req,res) {
    //     const {id} = req.params
    //     const message = await Message.findOne({where:{id}})
    //     return res.json(message)
    // }

    async update (req,res) {
        
    }

    async delete (req,res) {
        
    }
}

module.exports = new MessageController()