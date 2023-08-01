import "./GameOver.css"

const GameOver = ({restart}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={restart}>
        <p>Restart</p>
      </button>
    </div>
  )
}

export default GameOver