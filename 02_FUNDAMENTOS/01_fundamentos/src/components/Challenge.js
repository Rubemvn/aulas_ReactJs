const Challenge = () => {

  let number = () => { return (Math.floor(Math.random() * 100)) };

  const number1 = number()
  const number2 = number()
  const number3 = 0

  const click = (e) => {
    console.log(e)
    if (e) {
      addTwoNumbers(true)
    } else {
      addTwoNumbers(false)
    }
  }

  const addTwoNumbers = (click) => {
    if (click) {
      return (<p>{number1 + number2}</p>)
    }
  }

  return (
    <div className="challenge">
      <h3>1° número: {number1}</h3>
      <h3>2° número: {number2}</h3>

      <div>
        <button onClick={click}>Clique aqui para somar os números</button>
      </div>
    {addTwoNumbers()}

    </div>
  )

}

export default Challenge