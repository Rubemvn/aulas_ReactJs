//  CSS
import './ComponentPages.css'

// react router
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// hook
import { useFetch } from '../hooks/useFetch'

const Product = () => {
  // 4 - rota dinamica
  const { id } = useParams()
  
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url)
  
  return (
    <div className='contentPages'>

      <h1>Produto {id}</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {!loading && (
          product && (
            <div>
              <h3>ID: #{product.id} | {product.name}</h3>
              <h4>R$ {product.price}</h4>
            {/* 6 -nested routes */}
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
          )
        )
      }
    </div>
  )
}

export default Product