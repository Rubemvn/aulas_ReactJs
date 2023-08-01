import './Game.css'

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>
        <p>Verificar Letra</p>
      </button>
    </div>
  )
}

export default Game