const ChildrenContainer = ({children, value}) => {
  return (
    <div>
      <h2>Esse é o título do container</h2>
      {children}
      <p>o valor é: {value}</p>
    </div>
  )
}

export default ChildrenContainer