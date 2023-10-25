import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
import { useTitleColorContext } from "../hooks/useTitleColorContext"
// import { CounterContext } from "../context/CounterContext"

const Teste = () => {
  // const { counter , setCounter} = useContext(CounterContext)
  
  const {color, dispatch} = useTitleColorContext()

  return (
    <div className="contentPages">
      <h1 style={{fontSize: '3rem', color: color}}>Página de Teste</h1>
      <ChangeCounter/>
    </div>
  )
}

export default Teste