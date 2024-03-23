const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.SERVER_PORT || '4646'

// Router

const MarketingRouter = require("./router/route")

// Version
const version = '/api/v1'

app.use(cors())
app.use(express.json())


app.use(`${version}/tables`, MarketingRouter)

app.listen(PORT, () => {console.log('serverrunning on ' + PORT)} )
