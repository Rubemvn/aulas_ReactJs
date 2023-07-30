const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
      <button  onClick={() => (
      myFunction("Rúbem")
      )}>Clique!</button>
    </div>
  )
}

export default ExecuteFunction