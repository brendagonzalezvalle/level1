
// try {
    
//     if(2 === 2){
//        throw new Error("Hey I am an error!")
//     }
//     console.log("Did I console log?")
// }
// catch(err){
//     console.log(err)
// }
// finally {
//    console.log("I am running no matter what!") 

// }

// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:


try {
  function sum(x, y){
      //check data types first and throw error
      return x + y;
    }

    if(sum === 2){
      
      console.log("2 is === 2")
    }
    else if (sum !== 2){
      throw new Error("sum is Not equal to 2")
   
    }
    sum(1,1)
  }
  
  catch(err) {
    console.log(err)

  }
  finally {
    console.log("I will work no matter what!")
  }

  
// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
// var user = {username: "sam", password: "123abc"};
// try{
  
//   function login(username, password){
//     //check credentials
//     if(username === user.username && password === user.password){
//       console.log("Username & password do match")
//     } else{

//       throw new Error("Username & password don't match")
//     }
  

    
//   }

//   login("sam", "123abc")
  
// }
// catch(err){
//   console.log(err)

// }

// finally {
//   console.log("I will work no matter what!")
// }
