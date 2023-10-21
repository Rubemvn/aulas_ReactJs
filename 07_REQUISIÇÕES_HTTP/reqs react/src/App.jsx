import { useEffect, useState } from 'react'

// 4 - import custom hook
import { useFetch } from './hooks/useFetch'

import './App.css'

function App() {
  const [products, setProducts] = useState([])

  const url = "http://localhost:3000/products"
  // 4 - custom hook
  const { data: items, httpConfig, loading, error} = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)


  // console.log(data)

  // 1 - resgatando dados do backend
  // useEffect(() => {

  //   async function fetchData() {

  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, [])

  // 2 - adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    console.log(product)

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })
    // // 3 - carregamento dinamico
    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando post
    httpConfig(product, 'POST')

    setName("")
    setPrice("")
  }

  const deleteProduct = (id) => {
    console.log(id)
    httpConfig(id, 'DELETE')
  }


  return (
    <>
      <div className='App'>
        <h1>Lista de Produtos</h1>
        {/* 6 - loading */}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error && (
          <ul> {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$ {product.price}
                <button onClick={() => deleteProduct(product.id)}>Deletar Produto</button>
              </li>
            ))
          } </ul>
        )}
        <div className="addProducts">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            {/* 6 - loading no POST */}
            {loading && <input type="submit" disabled value="Aguarde..." /> }
            {!loading && <input type="submit" value="Criar" /> }
          </form>
        </div>
      </div>
    </>
  )
}

export default App
