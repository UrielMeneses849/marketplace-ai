import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import Sidebar from './Components/Sidebar'
import agents from "./Agentes.json";

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display: "flex", width: "100%"}}>
      <Sidebar />
      <div style={{display: "flex", 
        flexDirection: "column", 
        marginLeft: "220px", // 🔥 ESTO ES CLAVE
        width: "100%",
        paddingTop: 15, 
        paddingLeft: 20, 
        paddingRight: 20,
        alignSelf: "stretch",
        height: "auto",
      }}>

      <Hero />
      <Cards 
      agents={agents}
      onClick={(agent) => console.log(agent)}
      />
      </div>
    </div>
  )
}

export default App
