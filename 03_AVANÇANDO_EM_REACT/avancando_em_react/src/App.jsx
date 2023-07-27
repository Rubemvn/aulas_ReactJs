import './App.css'
import NightCity from './assets/image2.jpg'
import ConditionRender from './components/ConditionRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'

function App() {

  return (
    <div className='content'>
      
      <ManageData className="ManageDataContent"/>
      <ListRender className="ListRenderContent"/>
      <ConditionRender/>
    </div>
  )
}

export default App
