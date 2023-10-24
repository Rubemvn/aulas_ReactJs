import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
// import { CounterContext } from "../context/CounterContext"

const Teste = () => {
  // const { counter , setCounter} = useContext(CounterContext)
  
  return (
    <div className="contentPages">
      <ChangeCounter/>
    </div>
  )
}

export default Teste