const Events = () => {

  const handleMyEvent = (e) => {
    console.log(e)
    console.log("Ativou o evento")
  }

  const user  = {
    name: "Rúbem Vieira",
    description: "Dev Front-End que trabalha com React e VueJs",
    user: "rubem_vn"

  }

  const renderSomething = (x) => {
    if (x) {
      return (
        <div>
          <h2>DevCard</h2>
          <h3>{x.name}, é um dev Front-End</h3>
          <h4>{x.description}</h4>
          <a href={`https://www.instagram.com/${x.user}`} target="_blank">Instragram</a>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Error!</h2>
          <h3>Esse usuário não existe!</h3>
        </div>
      )

    }
  }

  return (
    <div>
      <div>
        <div>
          <button onClick={handleMyEvent}>Clique aqui!</button><br />
        </div>

        <div>
          <button onClick={() => console.log("Clicou!")}>Clique aqui de novo!</button>
          <button onClick={() => {
            if (true) {
              console.log("Clicou de novo")
            }
          }
          }>Clique aqui também!
          </button>

        </div>
      </div>
      {renderSomething(user)}
      {renderSomething(false)}
    </div>
  )

}

export default Events