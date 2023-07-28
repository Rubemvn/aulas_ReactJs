import { useState } from 'react'
import './App.css'

import NightCity from './assets/image2.jpg'
import ConditionRender from './components/ConditionRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CardDetails from './components/CardDetails'
import Fragment from './components/Fragment'

function App() {
  const [userName] = useState("Antonieta")
  const frag = "Esse é um fragment de test"

  const cars = [
    {
      id: 1,
      marca: "volkswagen",
      modelo: "polo",
      km: 22600,
      newCar: false
    }, {
      id: 2,
      marca: "chevrolet",
      modelo: "cobalt",
      km: 0,
      newCar: true
    }, {
      id: 3,
      marca: "fiat",
      modelo: "strada",
      km: 56900,
      newCar: false
    }
  ]

  return (
    <div className='content'>

      {/* Use State */}
      <ManageData className="ManageDataContent" />

      {/* Renderizando listas dentro de componentes */}
      <ListRender className="ListRenderContent" />
      <div>

        {/* Condicionais lineares em React */}
        <ConditionRender />

        {/* Props */}
        <ShowUserName name={userName} />

        {/* Destructuring */}
        <CardDetails marca="chevrolet" modelo="onix" km={34000} newCar={false} />
        <CardDetails marca="chevrolet" modelo="montana" km={0} newCar={true} />
        <CardDetails marca="chevrolet" modelo="s10" km={34000} newCar={false} />

        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CardDetails key={car.id} marca={car.marca} modelo={car.modelo} km={car.km} newCar={car.newCar} />
        ))}
      </div>

      {/* Fragment */}
      <Fragment prop={"frag"}/>
    </div>
  )
}

export default App
