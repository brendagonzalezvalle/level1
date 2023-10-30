import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Navbar from './Navbar'
import BlogList from './BlogList'
import BlogPost from './BlogPost'
import Footer from './Footer'
import data from './data'
console.log(data)

export default function App() {
  
const blogData = data.map(function(items){
  return ( 
    <div>
       <BlogPost
       title={items.title}
       subTitle={items.subTitle}
       author={items.author}
       date={items.date}
        />

    </div>

  )
})
  return (
    <div className="App">
      <Navbar />
    <Header />
      
      {blogData}
      
    <BlogList />
      <Footer />
        
       
    </div>
  )
}


