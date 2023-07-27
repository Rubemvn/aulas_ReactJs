import { useState } from "react"

const ConditionRender = () => {

  const [x, setCondition] = useState()

  const [sideBall, setSide] = useState("center")

  const showHiddenText = (condition) => {
    setCondition(condition)

  }

  const buttonSide = (side) => {
    setSide(side)
  }

  return (
    <div>
      <div className="conditionalCard">
        <h2>Condicionais</h2>
        <h3>Escolha um botão abaixo</h3>
        <button id="buttonTrue" onClick={() => (
          showHiddenText(true)
        )}>True</button>
        <button id="buttonFalse" onClick={() => (
          showHiddenText(false)
        )}>False</button>
        <div>
          {x === true ? (
            <div>
              <h3> Escolha um lado</h3>
              <div className="buttons">
                <button onClick={() => (
                  buttonSide("left")
                )
                }>Esquerda</button>

                <button onClick={() => (
                  buttonSide("right")
                )
                }>Direita</button>
              </div>

              <div className={sideBall + " ballBar"}>
                <div className="sideBall"></div>
              </div>
            </div>
          ) : (
            <div>

            </div>
          )}

        </div>
      </div>
    </div >
  )
}

export default ConditionRender