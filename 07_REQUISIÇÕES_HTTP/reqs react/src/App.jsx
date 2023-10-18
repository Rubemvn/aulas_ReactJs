import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const url = "http://localhost:3000/products/"


  // 1 - resgatando dados do backend
  useEffect(() => {

    async function fetchData() {

      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, [])

  // 2 - adicionando produtos
  const handleSubmit = async () => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    console.log(product)

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }

  return (
    <>
      <div className='App'>
        <h1>Lista de Produtos</h1>
        <ul>
          {
            products.map((product) => (
              <li key={product.id}>
                {product.name} - R$ {product.price}
              </li>
            ))
          }
        </ul>
        <div className="addProducts">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Price:
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
            </label>
            <input type="submit" value="Criar" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App
