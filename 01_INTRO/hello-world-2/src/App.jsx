import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const rub = {

  user: "@rubemvn",
  name: "Rúbem Vieira",
  profile: "rubemvn.jpg",
  about: `
  Sou um desenvolvedor web com paixão por construir aplicativos web bonitos e funcionais.Sou proficiente em React e Node.js, 
  e estou sempre procurando aprender novas tecnologias.Sou uma pessoa orientada a resultados que é capaz de trabalhar de forma independente 
  e como parte de uma equipe.Estou animado para fazer parte de uma equipe que está construindo aplicativos web inovadores.`,
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>DevCard</h1>
      <div className='card'>
        <img src="../src/assets/images/rubemvn.jpg" alt="Perfil de Rúbem Vieira" />
        <h2>User: {rub.user}</h2>
        <h2>Name: {rub.name}</h2>
        <h2></h2>
        <p>{rub.about}</p>
      </div>
    </div>
  )
}

export default App


a