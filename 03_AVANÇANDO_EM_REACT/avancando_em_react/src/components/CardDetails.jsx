
const CardDetails = ({ modelo, marca, km, newCar}) => {
  return (
    <div>
      <ul>
        <li>Marca: {marca}</li>
        <li>Modelo: {modelo}</li>
        <li>KM: {km}</li>
        {newCar &&
          <li>Esse carro é novo</li>
        }
      </ul>
    </div>
  )
}

export default CardDetails