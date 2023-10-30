const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
    // insert your code here
   return arr.map(function(person){
        // console.log(person)
        return `<h1> ${person} </h1>, ` 
        
    })
}

console.log(peopleElements(people))

// Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]

const arr1 = [ 1, 3, 5 ]
const arr2= [ 2, 4, 6 ]
const arr3 = [...arr1,...arr2 ]

console.log(arr3)