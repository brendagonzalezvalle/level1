
// localStorage.setItem("name", "steve")
// localStorage.setItem("age", 10)
// localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))

// localStorage.setItem("adress", JSON.stringify({street: "123 street", city: "SLC" }))


// const adress = JSON.parse(localStorage.getItem("adress"))
// console.log(typeof adress)

// const age = localStorage.getItem("age")
// console.log(typeof age)

function sayHello(){
    console.log('hello!');
 }
 
 
 function stopSayingHello(){
    clearInterval(intervalID)
 }
 
 
 var intervalID = setInterval(sayHello, 1000);
 
 setTimeout(stopSayingHello,  5000)

// //  clearInterval(intervalID)
 
 