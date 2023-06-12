const express = require('express')

const cors = require('cors')

const logic = require('./services/logic')

const server = express()

server.use(express.json())

server.use(cors({
    origin:'http://localhost:3000'
}))

server.listen(8000,()=>{
    console.log('listening on port 8000');
})

// get all employees

server.get('/get-all-employees',(req,res)=>{
    logic.allEmployees()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// add new employee

server.post('/add-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empName,req.body.age,req.body.designation,req.body.salary)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// delete employee

server.delete('/delete-employee/:id',(req,res)=>{
    logic.removeEmp(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// get an employee details

server.get('/get-an-employee/:id',(req,res)=>{
    logic.getEmpDetail(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// update employee data

server.post('/update-employee',(req,res)=>{
    logic.updateEmployee(req.body.id,req.body.empName,req.body.age,req.body.designation,req.body.salary)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})