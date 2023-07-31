import { useState } from 'react'
import './App.css'

// Components
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 15
  const [nome, setNome] = useState("Joaquim")
  const redTitle = true

  return (
    <>
      <div>
        {/* CSS global */}
        <h1>React com css</h1>
        <p>texto do component</p>
        <p style={{ backgroundColor: 'darkcyan', padding: '10px' }}>texto com style inline</p>

        {/* CSS no component */}
        <MyComponent />

        {/* CSS inline dinâmico */}
        <p style={n > 10 ? { color: 'peru' } : { color: 'fuchsia' }}>CSS inline Dinamico 1</p>
        <p style={n < 10 ? { color: 'peru' } : { color: 'fuchsia' }}>CSS inline Dinamico 2</p>
        <div>
          <h2 style={nome === "Rúbem" ? { color: '#fffbe3', backgroundColor: '#008b51' } : { color: '#fffbe3', backgroundColor: '#8b0000' }}
          >{nome}</h2>
          <button onClick={() => setNome("Rúbem")}>Clique aqui</button>
          <button onClick={() => setNome("Joaquim")}>Reset</button>
        </div>

        {/* CSS Classes dinâmicas */}
        <div>
          <h2 className={redTitle ? "redTitle" : "title"}>Classe dinamica 1</h2>
          <h2 className={!redTitle ? "redTitle" : "title"}>Classe dinamica 2</h2>
        </div>

        {/* CSS Modules */}
        <Title/>
      </div>
    </>
  )
}

export default App
