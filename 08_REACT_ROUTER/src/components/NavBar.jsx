import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='logo'>
        Labor
      </div>
      <div className='links'>
        <NavLink to="/" className='link'>
        {/* <NavLink to="/" className={({isActive}) => (isActive ? 'active' : 'isNoActive')+' link'}> */}
          <div className='linkButton'>
            Dashboard
          </div>
        </NavLink>
        <NavLink to="/about" className='link'>
          <div className='linkButton'> 
            About
          </div>
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar