import './App.css'
import NightCity from './assets/image2.jpg'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'

function App() {

  return (
    <div className='content'>
      
      <ManageData className="ManageDataContent"/>
      <ListRender className="ListRenderContent"/>
    </div>
  )
}

export default App
