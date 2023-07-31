import './App.css'
import Cars from './components/Cars'

function App() {

  const cars = [{
    modelo: "",
    marca: "",
    placa: "",
    ano: ""
  }, {
    modelo: "",
    marca: "",
    placa: "",
    ano: ""
  }, {
    modelo: "",
    marca: "",
    placa: "",
    ano: ""
  },
  ]

  return (
    <>
      <div className='content'>
        <h1>Car Details</h1>
        {cars.map((car) => (
          <Cars />
        ))}
      </div>
    </>
  )
}

export default App
