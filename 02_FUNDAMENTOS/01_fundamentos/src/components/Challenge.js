const Challenge = () => {

  const A = Math.floor(Math.random() * 100)
  const B = Math.floor(Math.random() * 100)
  const C = A+B
  return (

    <div className="challenge">
      <h3>1° número: {A}</h3>
      <h3>2° número: {B}</h3>

      <div>
        <button onClick={() => { const sum = document.querySelector("#sum"); sum.innerText = `Soma: ${C}`; }}>Clique para somar</button>
      </div>
      <h3 id="sum"></h3>

    </div>
  )

}

export default Challenge