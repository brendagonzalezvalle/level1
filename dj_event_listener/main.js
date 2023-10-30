// const pinkBox = document.getElementById("pink")
// pinkBox.style.backgroundColor = "pink"
// pinkBox.style.height = "300px"
// pinkBox.style.width = "300px"

// // const blue = pinkBox.style.backgroundColor = "blue"

// console.log(pinkBox )

// document.addEventListener("keydown", function (event){
//  console.log(event.which);   
// } )

const pink = document.getElementById("pink");
pink.style.backgroundColor = "pink"
pink.style.height = "300px"
pink.style.width = "300px"

pink.addEventListener("mouseover", function() {
    pink.style.background= "blue"
    });

pink.addEventListener("mousedown", function() {
    pink.style.background= "red"
    });

pink.addEventListener("mouseup", function() {
    pink.style.background= "yellow"
    });

pink.addEventListener("dblclick", function() {
    pink.style.background= "green"
    });

pink.addEventListener("wheel", function() {
    pink.style.background= "orange"
    });


document.addEventListener("keydown", colorChange);

    function colorChange(e) {
    if (e.keyCode === 66) {
        pink.style.background= "blue"
    }
    else if (e.keyCode === 82) {
        pink.style.background= "red" 
    }
    else if (e.keyCode === 89) {
        pink.style.background= "yellow"
    }
    else if (e.keyCode === 71) {
        pink.style.background= "green"
    }
    else if (e.keyCode === 79) {
        pink.style.background= "orange"
    }
   
}