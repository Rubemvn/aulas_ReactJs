import './App.css'

// 1 - Config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import NavBar from './components/NavBar'
import Bar from './components/Bar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          {/* 2 - Links com React Router */}
          <NavBar />
          <div className='contentApp'>
            <Bar />
            
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About />} />
              {/* 6 - Nested routes */}
              <Route path='/products/:id/info' element={<Info />} />  
              {/* 4 - Rota dinamica */}
              <Route path='/products/:id' element={<Product />} />
              {/* 7 - 404 */}
              <Route path='*' element={<NotFound />} />
              {/*  */}
              <Route path='/search' element={<Search />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
