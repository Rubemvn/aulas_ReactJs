import { useState } from "react"

const ListRender = () => {
  const [list, setUsers] = useState([
    {
      id: 1,
      name: 'Rúbem Vieira',
      user: 'rubemvn',
      email: 'rubemvn17@gmail.com',
      job: 'programador'
    },
    {
      id: 2,
      name: 'Carlos Barros',
      user: 'carlos_bs',
      email: 'carlinplay2005@gmail.com',
      job: 'engenheiro eletrico'
    },
    {
      id: 3,
      name: 'Joaquim Feitosa',
      user: 'joca_feitosa',
      email: 'joaquim7372@gmail.com',
      job: 'cantor'
    },
    {
      id: 4,
      name: 'Hariely Narjarah',
      user: 'hari_narjarah',
      email: 'hari.coelho@gmail.com',
      job: 'professora'
    },
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber)

    setUsers((prevUsers) => {
      return prevUsers.filter((item) => randomNumber !== item.id)
    })
  }

  return (

    <div className="contentCard">
      {list.map((item) => (
        <div key={item.id} className="cardInfo">
          <h2>{item.name}</h2>
          <h3>@{item.user}</h3>
          <p>email: {item.email}</p>
          <p>{item.job}</p>
        </div>
      ))}
      <button onClick={deleteRandom}>Deletar Card Aleatório</button>
    </div>
  )
}

export default ListRender