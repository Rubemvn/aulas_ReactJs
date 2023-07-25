import { useState } from "react"

const ManageData = () => {

  const rechargeNumbers = () => {
    setNumberB(randomNumber())
    setNumberA(randomNumber())
    setNumberC()
  }

  const randomNumber = () => {
    return Math.floor(Math.random() * 100)
  }

  const [C, setNumberC] = useState()
  const [A, setNumberA] = useState(randomNumber())
  const [B, setNumberB] = useState(randomNumber())

  return (

    <div className="challenge">
      <button onClick={rechargeNumbers}>Recarregar Números</button>
      <h3>1° número: {A}</h3>
      <h3>2° número: {B}</h3>

      <button onClick={() => setNumberC(A + B)}>Somar Números</button>
      <h3>{C}</h3>

    </div>
  )
}

export default ManageData