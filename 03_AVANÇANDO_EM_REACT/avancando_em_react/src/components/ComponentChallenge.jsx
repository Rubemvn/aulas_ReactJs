const ComponentChallenge = ({ name, age, job }) => {
  return (
    <div className="ComponentChallenge">
      <p>Nome: {name}</p>
      <p>{age}</p>
      <p>{job}</p>
      {age >= 18 ? (
        <>
          <p>Esse usuário pode tirar carteira de motorista</p>
        </>
      ) : (
        <>
        <p>Esse usuário é menor de idade, portanto não pode tirar carteira de motorista</p>
        </>
      )}
    </div>
  )
}

export default ComponentChallenge