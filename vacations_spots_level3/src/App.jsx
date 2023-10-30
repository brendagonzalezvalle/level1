import './App.css'
import Card from './Card'
import vacationSpots from './data'


export default function App() {

const dataArray = vacationSpots.map((items) => {

  return ( <Card 
    place ={items.place}
    price={items.price}
    timeToGo={items.timeToGo}
  
  
  
  />

  )
})

  return (
    <div>

      {dataArray}

    </div>
  )
}
