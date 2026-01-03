import React, { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [text,setText]=useState("")

  const handelChange = (event)=>{
    setText(event.target.value)
  }

  const data = {
   1:{
      message:"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
      pic:"https://m.media-amazon.com/images/I/513JiRqwAnS._AC_UF894,1000_QL80_.jpg"
    },

    2:{
      message:"I would believe only in a God who could dance",
      pic:"https://www.campion.edu.au/wp-content/uploads/2025/08/Nietzsche-Blog-Post-Featured-Image.png"
    }
  }

  return (
    <div>
      {
        Object.entries(data).map(([key,value])=>{
          return <Card key={key} message={value.message} image={value.pic} />
        })
      }
    </div>
  )
}
import './App.css'

export default App
