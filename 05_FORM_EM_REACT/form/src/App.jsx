import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForm user={{name: "Jael", email: "jaelantonieto@gmail.com", bio: "Sou um desenvolvedor", role: "Desempregado"}}/>
      </div>
    </>
  )
}

export default App
