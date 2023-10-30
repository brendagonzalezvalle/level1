import React from 'react'
import './App.css'
import FriendList from './FriendList'
import Pet from './Pet'
import friends from './data'
// import Friend from './Friend'


export default function App() {

  const friendsMap = friends.map((people) => {
    return ( <FriendList 

    name={people.name}
    age={people.age}
    pets={people.pets}

    
    />
    

    )


  })
  

  return (
    <div>
      
      {friendsMap}

     
       
    </div>
  )
}


