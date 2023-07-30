import { useState } from 'react'
import './App.css'

import NightCity from './assets/image2.jpg'
import ConditionRender from './components/ConditionRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CardDetails from './components/CardDetails'
import Fragment from './components/Fragment'
import ChildrenContainer from './components/ChildrenContainer'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'
import ComponentChallenge from './components/ComponentChallenge'

function App() {
  const [userName] = useState("Antonieta")
  const frag = "Esse é um fragment de test"
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

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

  function sendMessage(x) {
    console.log(`Olá, ${x}`)
  }

  const clients = [{
    id: "001",
    name: "Rúbem Vieira",
    age: 21,
    job: "Developer"
  }, {
    id: "002",
    name: "Antonio Capivas",
    age: 65,
    job: "Pescador"
  }, {
    id: "003",
    name: "Enzo Vinycius",
    age: 12,
    job: "Estudant"
  }, {
    id: "004",
    name: "Algustus Nicoderas",
    age: 55,
    job: "Researcher"
  }, {
    id: "005",
    name: "Francisco Almon",
    age: 17,
    job: "Apprentice"
  }, {
    id: "006",
    name: "Harielson Nalas",
    age: 16,
    job: "Mason Helper"
  }]

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
      <Fragment prop={"frag"} />

      {/* Chijdren */}
      <ChildrenContainer value={67}>
        <p>
          esse é o conteúdo desse container
        </p>
      </ChildrenContainer>
      <ChildrenContainer value={80}>
        <h3>
          esse é o subtitulo
        </h3>
      </ChildrenContainer>

      {/* Executar função em prop */}
      <ExecuteFunction myFunction={sendMessage} />

      {/* Statte lift */}
      <div>
        <h3>State Lift</h3>
        <Message message={message} />
        <ChangeMessage handleMessage={handleMessage} />
      </div>

      {/* Desafio dos componentes de React */}
      {
        clients.map((client) => (
          <ComponentChallenge key={client.id} name={client.name} age={client.age} job={client.job}/>
        ))
      }
    </div>
  )
}

export default App
