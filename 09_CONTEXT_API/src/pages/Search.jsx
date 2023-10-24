import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

// import './ComponentPages.css'

const Search = () => {
  const [searchParams] = useSearchParams()

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, loading, error } = useFetch(url)

  // Certifique-se de que items seja um array
  const itemsArray = Array.isArray(items) ? items : [];

  return (
    <div className="contentPages">
      <h1>Resultados disponíveis</h1>

      <ul className='products'>
        {items && items.map((item) => (
          <li key={item.id}>
            <h3>ID: #{item.id} | {item.name}</h3>
            <h4>R$ {item.price}</h4>
            <Link to={`products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Search