import './ComponentPages.css'
import { useParams } from 'react-router-dom'


const Info = () => {
  const { id } = useParams()
  return (
    <div className='contentPages'>
      <h1>Mais informações do produto: {id}</h1>
    </div>
  )
}

export default Info