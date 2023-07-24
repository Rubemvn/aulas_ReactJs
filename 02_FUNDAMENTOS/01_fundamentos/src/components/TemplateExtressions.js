import MyComponents from "./MyComponents";

const TemplateExtressions = () => {

  const name =  "Rúbem"
  const data = {
    age: 22,
    job: "Oreia",
    company: "Labor Engenharia"
  }

  return (
    <div>
      <h3>
        Olá, {name}! como você está?
      </h3>
      <p>Vocé é um {data.job} na empresa {data.company}</p>
      <MyComponents/>
    </div>
  )

}

export default TemplateExtressions;