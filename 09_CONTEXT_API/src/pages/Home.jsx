import './Home.css'
import './ComponentPages.css'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  // 3 - carregamento de dados
  const url = 'http://localhost:3000/products'

  const { data: items, loading, error } = useFetch(url)
  
  // 5 - contexto mais complexo
  const { color, dispatch } = useTitleColorContext()
  
  // 6 - ALTERANDO STATE COMPLEXO
  const setTitleColor = (color) => {
    dispatch({ type: color})
  }
  return (
    <div className="home contentPages">
      <h1 style={{color: color}}>Dashboard</h1>
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
      {/* 6 - alterando state complexo */}
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('GREEN')}>Verde</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
        <button onClick={() => setTitleColor('BROWN')}>Marrom</button>
        <button onClick={() => setTitleColor('YELLOW')}>Amarelo</button>
        <button onClick={() => setTitleColor('CYAN')}>Ciano</button>
        <button onClick={() => setTitleColor('PINK')}>Rosa</button>
      </div>
    </div>
  )
}

export default Home