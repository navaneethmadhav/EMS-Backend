const db = require('./db')

const allEmployees = () =>{
    return db.Employee.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No products found'
                }
            }
        }
    )
}

// add employee

const addEmployee = (id,empname,age,designation,salary) =>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:404,
                    message:"Employee Id already exists"
                }
            }
            else{
                const newEmp = new db.Employee({
                    id,
                    empname,
                    age,
                    designation,
                    salary
                })
                newEmp.save()
                return{
                    status:true,
                    statusCode:200,
                    message:"New Employee added successfully"
                }
            }
        }
    )
}

// delete employee

const removeEmp = (id) =>{
    return db.Employee.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Data removed Successfully"
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"No data found"
                }
            }
        }
    )
}

// get a particular employee details

const getEmpDetail = (id) =>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"No data found"
                }
            }
        }
    )
}

const updateEmployee = (id,empname,age,designation,salary) =>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                result.id = id
                result.empname = empname
                result.age = age
                result.designation = designation
                result.salary = salary

                result.save()
                return{
                    status:true,
                    statusCode:200,
                    message:"Employee data updated successfully"
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:"No data found"
                }
            }
        }
    )
}

module.exports = {
    allEmployees,
    addEmployee,
    removeEmp,
    getEmpDetail,
    updateEmployee
}