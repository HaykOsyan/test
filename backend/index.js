require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const bodyParser = require('body-parser');
errorHandler = require('./middleware/ErrorMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)


const start = async () => {
    try {
           await sequelize.authenticate()
           await sequelize.sync()
            app.listen(PORT, () => console.log('Server is running on port ' + PORT))
    } catch (error) {
        console.log(error)
    }
}

start()