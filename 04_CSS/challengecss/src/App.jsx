import './App.css'
import Cars from './components/Cars'

function App() {

  const cars = [{
    id: "001",
    modelo: "Cobalt",
    marca: "Chevrolet",
    placa: "WER6543",
    ano: "2014"
  }, {
    id: "002",
    modelo: "Polo",
    marca: "Volkswagen",
    placa: "FGH6573",
    ano: "2023"
  }, {
    id: "003",
    modelo: "Kicks",
    marca: "Nissan",
    placa: "DFG5678",
    ano: "2020"
  }, {
    id: "004",
    modelo: "Sandero",
    marca: "Renault",
    placa: "NMH3456",
    ano: "2013"
  }, {
    id: "005",
    modelo: "Tiggo 5x",
    marca: "Caoa Chery",
    placa: "DFG9077",
    ano: "2015"
  }, {
    id: "006",
    modelo: "Corsa",
    marca: "Chevrolet",
    placa: "XSD3457",
    ano: "2009"
  },
  ]

  return (
    <>
      <h1>Car Details</h1>
      <div className='content'>
        {cars.map((car) => (
          <Cars key={car.id} modelo={car.modelo} marca={car.marca} placa={car.placa} ano={car.ano}/>
        ))}
      </div>
    </>
  )
}

export default App
