import './Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className='Title'>
        <h1>Film & Tunes</h1>
        <div className='Title-Subtitle'>Grab Your Camera and a Pair of Headphones!</div>
        <div>
        <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/">List Of Films</NavLink>
            <RandomSpace />
            <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/about">About</NavLink>
            <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/places">Places</NavLink>
        </div>
    </div>
  )
}

export default Title;

