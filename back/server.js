const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.Port || 2224
const userRouter = require('./routers/userRouter')
const contactRouter = require('./routers/contactRouter')
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const connectDB = require('./bd/connect');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/',userRouter)
app.use('/contacts',contactRouter)

app.listen(port, () => {
  console.log(`Server in port ${port}`)
  })
