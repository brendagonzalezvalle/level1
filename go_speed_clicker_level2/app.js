// Track how many times the user has clicked a button

const button = document.getElementById("button")
console.log(button)

let count = 0
const numberOfClicks = button.addEventListener("click",  function(){
   count += 1;
   console.log(count)

   // Display that click count to the user
   const totalsSavedToStorage = document.getElementById("totalClicks").innerHTML = "You have clicked the click me button " + count + " times!!"
   // Use Localstorage or sessionStorage , make it so the number of clicks will remain on the screen even after the site is refreshed.
      localStorage.setItem("click", (totalsSavedToStorage))
      const myValue = localStorage.getItem("click")
      console.log(myValue)



   
})