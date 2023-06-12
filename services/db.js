const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ems')

const Employee=mongoose.model('Employee',
{
    id:String,
    empname:String,
    age:Number,
    designation:String,
    salary:Number
})

module.exports={
    Employee
}