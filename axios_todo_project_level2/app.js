// ### **Part 1 - GET**

// - The user can see their current list of todos.
// - Todos show up as soon as the page loads.
// - If a todo item is complete, it should have a strikethrough line on it
// - Images should be displayed as images if there are any

// Hints:

// A `createTodo` function that takes one todo and inserts it to the DOM is very userfull

// Use postman to get those first few todos in there with some images so you can style your list!

// API url: "https://api.vschool.io/brendagonzalezvalleholman/todo"

// Get all the todos from the database and assign them to the variable "todoList"
axios.get("https://api.vschool.io/brendagonzalezvalleholman/todo")

.then(response => console.log(response.data))
.catch(error => console.log(error))

console.log(todoList)

const form = document.testForm


