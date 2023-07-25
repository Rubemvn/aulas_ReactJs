import { useState } from "react"

const ListRender = () => {
  const [list, name] = useState([
    {
      name: 'Rúbem Vieira',
      user: 'rubemvn',
      email: 'rubemvn17@gmail.com',
      job: 'programador'
    },
    {
      name: 'Carlos Barros',
      user: 'carlos_bs',
      email: 'carlinplay2005@gmail.com',
      job: 'engenheiro eletrico'
    },
    {
      name: 'Joaquim Feitosa',
      user: 'joca_feitosa',
      email: 'joaquim7372@gmail.com',
      job: 'cantor'
    },
    {
      name: 'Hariely Narjarah',
      user: 'hari_narjarah',
      email: 'hari.coelho@gmail.com',
      job: 'professora'
    },
  ])
  return (

    <div className="contentCard">
      {list.map((item, i) => (
        <div key={i} className="cardInfo">
          <h2>{item.name}</h2>
          <h3>@{item.user}</h3>
          <p>email: {item.email}</p>
          <p>{item.job}</p>
        </div>
      ))}
    </div>
  )
}

export default ListRender