// ### **Part 1 - GET**
// Hints:
// A `createTodo` function that takes one todo and inserts it to the DOM is very userfull
//DONE Use postman to get those first few todos in there with some images so you can style your list!
// Get all the todos from the database and assign them to the variable "todoList"
// Get DATA from database



function getData(){
    axios.get("https://api.vschool.io/brendag/todo/")
    .then(response => (createTodo(response.data)))
    .catch(error => console.log(error))
    
}



// Create a function to create and add list to the DOM : create a new div and append new divs to test
function createTodo(data){
    document.getElementById("todoList").innerHTML = "" 
    // try using the whileloop, go back an try it.
    
    
    for (let i = 0; i < data.length; i++) {
        // create elements
        const newToDo = document.createElement('h1')
        const newDiv = document.createElement('div')
        const checkBoxInput = document.createElement("INPUT")
        const deleteButton = document.createElement("button")
        const newImage = document.createElement("img")

        
        newToDo.textContent = data[i].title
        newDiv.setAttribute("id", data[i]._id)
        deleteButton.setAttribute("id", data[i]._id)
        checkBoxInput.setAttribute("type", "checkbox");
        deleteButton.innerHTML = "Delete"
        newImage.src = data[i].imgUrl
        
        checkBoxInput.checked = data[i].completed
        
        newDiv.append(newToDo, checkBoxInput, deleteButton, newImage)
        test.append(newDiv)
//      Style newDiv

        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "flex-end";
        newDiv.style.marginLeft = "10px";

       //  Style newTodo
        newToDo.style.fontSize = "15px";
        newToDo.style.marginRight = "41px";
        
        
        // Style new images
        newImage.style.width = "200px";
        newImage.style.height = "150px";
        newImage.style.marginLeft = "170px";
        newImage.style.marginBottom = "35px";
        
        // style checkbox input
        checkBoxInput.style.marginRight = "150px";
        checkBoxInput.style.marginBottom = "148px";

        // style deletebutton input

        deleteButton.style.marginBottom = "10px";
        // deleteButton.style.margin = "70px";
        // deleteButton.style.padding = "15px";

       


        
        console.log(newDiv)
        console.log(deleteButton)
        console.log(newImage)
        
       
        // Part 3 Put Request - Each todo will have a checkbox where it can be marked complete or incomplete
        // - Checking the checkbox should update the database
        
        
        checkBoxInput.addEventListener("change", function(event) {
            event.preventDefault()
            
            if(event.target.checked){

                axios.put("https://api.vschool.io/brendag/todo/" + data[i]._id, {completed: true})
                .then(response => console.log(response.data))
                .catch(error => error)
                
                newToDo.style.textDecoration = "line-through"
                
            } else if (!event.target.checked){
                axios.put("https://api.vschool.io/brendag/todo/" + data[i]._id, {completed: false})
                .then(response => console.log(response.data))
                .catch(error => error)
                
                newToDo.style.textDecoration = ""
                
            }    
            
            
            
        })    
        
        // ### **Part 4 - DELETE**
        
        // - A user will be able to delete todos (this is different from marking a todo as "completed")
        // - Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo

        deleteButton.addEventListener("click", function(event) {
            event.preventDefault()

            newDiv.remove()
            
            axios.delete("https://api.vschool.io/brendag/todo/" + data[i]._id)
            .then(response => console.log(response.data))
            .catch(error => error)
            
            
            
            
            
            
            
        })    
        
    }    
    
}    

console.log(getData())
let test = document.getElementById("todoList")
console.log(test)




// Part 2 Post

const form = document.addNewToDoForm
console.log(form)

form.addEventListener("submit", function (event) {
    event.preventDefault()
    
    const newPosts = {
        title: form.title.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
    }    
    form.title.value = ""
    form.price.value = ""
    form.description.value = ""
    form.imgUrl.value = ""
    
    // console.log(newPosts)
    axios.post("https://api.vschool.io/brendag/todo/", newPosts)
    .then(response => getData())
    .catch()
    
    
    
})    





