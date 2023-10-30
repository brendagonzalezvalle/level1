// done You are going to create a simple calculator that can Add, Subtract, and Multiply.

// **Requirements:**

//done - You will have one section (`<div>`) for each math operation (so 3 sections) total 
// done- Each section has two inputs to take the first and second numbers
//done - Each section will have a button to perform the operation
// done- You will inject the result into the HTML (not an alert)
// done- Your website will have 3 colors
// done- Your website will have proper padding/spacing to lay things out nicely

const form1 = document["adding-form"]
const form2 = document["subtracting-form"]
const form3 = document["multiplying-form"]




// Form 1 adding

form1.addEventListener("submit", function (e) {
    e.preventDefault()


    const firstNumberAdding = form1.addNum1.value
    const secondNumberAdding = form1.addNum2.value
    const result = ((firstNumberAdding*1) + (secondNumberAdding*1))

    
    form1.addNum1.value = " "
    form1.addNum2.value = " "
    
    console.log(firstNumberAdding)
    console.log(secondNumberAdding)


    
    const header1 = document.createElement("h2")
    header1.textContent = result
    document.getElementById("section1").append(header1)



})

// Form 2 subtracting

form2.addEventListener("submit", function(e){
    e.preventDefault()

    const firstNumberSubtracting = form2.subNum1.value
    const secondNumberSubtracting = form2.subNum2.value
    const subractResult = ((firstNumberSubtracting*1) - (secondNumberSubtracting*1)) 

    form2.subNum1.value = " "
    form2.subNum2.value = " "

    console.log(firstNumberSubtracting)
    console.log(secondNumberSubtracting)

    const header2 = document.createElement("h2")
    header2.textContent = subractResult
    document.getElementById("section2").append(header2)



})

// Form 3 multiplying

form3.addEventListener("submit", function(e){
    e.preventDefault()

    const multiplyNumber1 = form3.mulNum1.value
    const multiplyNumber2 = form3.mulNum2.value
    const multiplyingResult = ((multiplyNumber1*1) * (multiplyNumber2*1))

    form3.mulNum1.value = ""
    form3.mulNum2.value = ""


    console.log(multiplyNumber1)
    console.log(multiplyNumber2)

    const header3 = document.createElement("h2")
    header3.textContent = multiplyingResult
    document.getElementById("section3").append(header3)

})