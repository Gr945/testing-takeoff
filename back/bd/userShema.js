const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/BASE_TESTING',
{useNewUrlParser: true, useUnifiedTopology: true})

const User = mongoose.model('User',{
  name: {type:String},
  password:{type:String},
  contacts:[]
})

module.exports = User
