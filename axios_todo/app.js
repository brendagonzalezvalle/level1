// // Get requests with axios
// // url: https://api.vschool.io/scrimbalessons/todo

// // Get All

// // axios.get("https://api.vschool.io/brendagv/todo")

// // .then(response => console.log(response.data))
// // .catch(error => console.log(error))
// //     // .then(response => {
// //     //     for(let i = 0; i < response.data.length; i++){
// //     //         const h1 = document.createElement('h1')
// //     //         h1.textContent = response.data[i].title
// //     //         document.body.appendChild(h1)
// //     //     }
// //     // })
// //     // .catch(error => console.log(error))


// // Get One
// axios.get("https://api.vschool.io/brendagv/todo/632e573b18d1a05bceae7b33")
//     // .then(response => console.log(response.data.title))
//     .then(response => {
       
//             const newHeader1 = document.createElement('h1')
//             newHeader1.textContent = response.data.title
//             document.body.appendChild(newHeader1)

        
//     })


//     .catch(error => console.log(error))

    // Post Request

// const newTodo = {
//         title: "My 3rd Todo",
//         description: "This is my 3rd entry",
//         imgUrl: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
//     }
    
    
//     axios.post("https://api.vschool.io/brendagv/todo", newTodo)
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))

//  const form = document.goToForm 
//  console.log(form) 
 
// form.addEventListener("submit", function(event){
//         event.preventDefault()

//         const newTodo = {
//                 title: form.title.value,
//                 description: form.description.value
//         }

//         // axios.post("https://api.vschool.io/brendagv/todo", newTodo)
//         // .then(response => console.log(response.data))
//         // .catch(error => console.log(error))

        


// })

axios.delete("https://api.vschool.io/brendagv/todo/633601f018d1a05bceae7c61")
.then(response => console.log(response.data))
.catch(error => console.log(error))

axios.get("https://api.vschool.io/brendagv/todo")

.then(response => console.log(response.data))
.catch(error => console.log(error))
