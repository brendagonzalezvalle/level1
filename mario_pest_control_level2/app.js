const form = document.marioPestForm


form.addEventListener("submit", function (e) {
    e.preventDefault()

    const goomba = form.goombaTotal.value
    console.log(goomba)
    
    const bobombs = form.bobombsTotal.value
    console.log(bobombs)

    const cheepcheeps = form.cheepcheepsTotal.value
    console.log(cheepcheeps)

    form.goombaTotal.value = ""
    form.bobombsTotal.value = ""
    form.cheepcheepsTotal.value = ""

    const sumTotal = ((goomba*1) + (bobombs*1) + (cheepcheeps*1))
    console.log(sumTotal)
    
    const total = document.createElement("h3")
    total.textContent = sumTotal
    document.getElementById("totalPrice").append(total)


})
