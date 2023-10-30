// You just started your own airline, and you need to create a form to collect data about your passengers' upcoming travel plans so they can book their flight.

// You should collect the following information from the user:

// - First name (text input)
// - Last name (text input)
// - Age (number input)
// - Gender (radio buttons with 2 or more options)
// - Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
// - Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

// Each element of the form should be given a `name` attribute so you can access the data in JavaScript and do stuff with it.

// There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:

const form = document.flightForm
const checkedInputs = []

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const firstName = form.nameField1.value 
    const lastName = form.nameField2.value
    const ageOfPerson = form.ageField.value
    const gender = form.genderField.value
    const location = form.locations.value
    
    for(let i = 0; i < form.dietRestrictions.length; i++){
        if(form.dietRestrictions[i].checked)
        checkedInputs.push(form.dietRestrictions[i].value)

    }
    (checkedInputs)

    let formAlert = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Age: ${ageOfPerson}
        Gender: ${gender}
        Location: ${location}
        Dietary Restrictions: ${checkedInputs}
    `
    alert(formAlert);
    event.preventDefault()



})
