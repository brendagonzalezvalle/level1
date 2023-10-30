// ### **Part 1 - GET**

// - The user can see their current list of todos.
// - Todos show up as soon as the page loads.
// - If a todo item is complete, it should have a strikethrough line on it
// - Images should be displayed as images if there are any

// Hints:

// A `createTodo` function that takes one todo and inserts it to the DOM is very userfull

// Use postman to get those first few todos in there with some images so you can style your list!

// API url: "https://api.vschool.io/brendagonzalezvalleholman/todo"



import axios from "axios";


const testObject = {
  title: "Brenda Test 1",
  description: "Vschool assignment"
}
// console.log(testObject)
// axios.get("https://api.vschool.io/brendagonzalezvalleholman/todo")
// .then(response => console.log(typeofresponse.data))
// .catch(error => console.log(error))

axios.post("https://api.vschool.io/brendagonzalezvalleholman/todo", testObject)
.then(response => console.log(response))
.catch(error => console.log(error))