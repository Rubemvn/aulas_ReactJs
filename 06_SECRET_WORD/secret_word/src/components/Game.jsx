import './Game.css'

const Game = ({ verifyLetter }) => {
  return (
    <div className='game content'>
      <p className='points'>
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a Palavra: </h1>
      <h3 className='tip'>
        Dica: <span> dica...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterCopntainer">
        <form>
          <input type="text" name='letter' maxLength="1" required />
          <button onClick={verifyLetter}><p>Jogar</p></button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras Utilizadas</p>
        <span>a</span>
        <span>e</span>
        <span>i</span>
      </div>
    </div>
  )
}

export default Game