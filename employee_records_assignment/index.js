var employees = []

function Employee(Name, JobTitle, Salary, Status = "Full Time"){
this.Name = Name;
this.JobTitle = JobTitle;
this.Salary = Salary
this.Status = Status

}
             
var printEmployeeForm = new Employee ("Bob" , "V School Instructor", "$3000/hour", "Part time")

var printEmployeeFormNum1 = new Employee ("Brenda" , "Customer Analyst", "$35/hr", "Contract")

var printEmployeeFormNum2 = new Employee ("Grant" , "Landscaper", "$25/hr",)

Employee.prototype.speak = function (){
    console.log(this.Status)
}
employees.push(printEmployeeForm, printEmployeeFormNum1, printEmployeeFormNum2)
console.log(employees)