import "./GameOver.css"

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>
        <p>Restart</p>
      </button>
    </div>
  )
}

export default GameOver