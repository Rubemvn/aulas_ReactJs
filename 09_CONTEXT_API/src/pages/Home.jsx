import './Home.css'
import './ComponentPages.css'
import { Link } from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'

const Home = () => {
  // 3 - carregamento de dados
  const url = 'http://localhost:3000/products'

  const {data: items, loading, error} = useFetch(url)
  return (
    <div className="home contentPages">
      <h1>Dashboard</h1>
      <h2>Produtos</h2>
      <div className='productsContainer'>
        {error && <p>{error}</p>}
        <ul className='products'>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <h3>ID: #{item.id} | {item.name}</h3>
                <h4>R$ {item.price}</h4>
                <Link to={`products/${item.id}`}>Detalhes</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Home