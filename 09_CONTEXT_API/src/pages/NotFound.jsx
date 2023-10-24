//  CSS
import './ComponentPages.css'
import './NotFound.css'

import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='contentPages notFound'>
      <h1>404</h1>
      <p>Não há nada aqui</p>
      <Link to={"/"}>Voltar para página inicial</Link>
    </div>
  )
}

export default NotFound