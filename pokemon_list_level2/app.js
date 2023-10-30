const xhr =  new XMLHttpRequest()
// console.log(xhr)
xhr.open("GET", "https://api.vschool.io/pokemon/", true )
xhr.send()

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4 && xhr.status === 200){
        const dataFromJson = xhr.responseText
        const data = JSON.parse(dataFromJson)
       
        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)

       

    } else if (xhr.readyState === 4 && xhr.status !== 200){

        const dataFromJson = xhr.responseText
        console.log(dataFromJson)
    }
    
}


function showData (pokemon){
    for(let i = 0; i < pokemon.length; i++){
    const h1 = document.createElement('h1')
    h1.textContent = pokemon[i].name
    document.body.appendChild(h1)
    }
}
