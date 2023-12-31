// 1. Make an array of numbers that are doubles of the first array

/* const numberArray = [2, 3, 4, 5, 6]

const doubleArray = numberArray.map(number => number * 2)

console.log(doubleArray) 
Line of code above is an example of when array variable is built code below has array passed through the function*/ 

function doubleNumbers(arr) {
    return arr.map(function (number){ 
    return number * 2

   })
}
  
  console.log(doubleNumbers([2, 5, 100])) // [4, 10, 200]
  


// 2. Take an array of numbers and make them strings

// const stringResult = numberArray.map(function(num){
//     return num + ""
// })
// console.log(stringResult)

function stringItUp(arr){
    return arr.map(function(num){
        return num + ""
    })
    
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  




// // 3) Capitalize the first letter of each name and make the rest of the characters lowercase

function capitalizeNames(arr){
    return arr.map(letter => {

         let firstLetter = letter.slice(0,1).toUpperCase()
         let otherLetters = letter.slice(1, 15).toLowerCase()
         return nameResult = firstLetter.concat(otherLetters)
         

    }) 
    
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]


  // 4) Make an array of strings of the names

  function namesOnly(arr){
    return arr.map(function(number){
      return number.name

    })
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
  
  
  
  // 5) Make an array of strings of the names saying whether or not they can go to The Matrix

  function makeStrings(arr){
    return arr.map(function(matrixAllowed){
      if(matrixAllowed.age >= 80)
      return matrixAllowed.name + " can go to The Matrix"

      else { return matrixAllowed.name + " is under age!!"}

    })
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  
  // 6) Make an array of the names in h1s, and the ages in h2s

  function readyToPutInTheDOM(arr){
    return arr.map(function(headers){
      return "<h1>" + headers.name + "</h1><h2>" + headers.age + "</h2>"
  

    })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]