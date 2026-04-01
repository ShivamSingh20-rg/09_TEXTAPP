const mongoose= require('mongoose')


const Todosc = new mongoose.Schema({
    tasks: { type: String, required: true },
   userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
})

const TodoSchema = mongoose.model( 'dds',  Todosc)

module.exports =  TodoSchema