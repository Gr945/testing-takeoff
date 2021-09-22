const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/BASE_TESTING',
{useNewUrlParser: true, useUnifiedTopology: true})

const Contact = mongoose.model('Contact',{
  name: {type:String},
  phone:{type:Number},
  avtorID:{type:String}
})

module.exports = Contact
