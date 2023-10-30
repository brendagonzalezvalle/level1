// write a function (oneWordOnly) that takes an array of strings, and 
// returns an array of just the strings with one word in them

function oneWordOnly(words){
    // code goes here
    return words.filter(function(noSpace){
        if(noSpace.includes(" ")){
            
        }
        else {
            return noSpace
        }


        
    })


   }
   
   console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
   console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"], 
   
   
//    contains & includes checkout?

