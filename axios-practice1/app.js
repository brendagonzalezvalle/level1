//app.js

const test = {
    title: "Brenda Test1",
    description: "Vschool test"
}




axios.get("https://api.vschool.io/brendagonzalezvalleholman/todo")
.then(response => console.log(response.data))
.catch(error => console.log(error))