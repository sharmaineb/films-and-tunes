import './Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className='Title'>
        <div className='Title-Subtitle'>Grab Your Camera and a Pair of Headphones!</div>
        <div>
        <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/">Home</NavLink>
            <RandomSpace />
            <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/places">Places</NavLink>
        </div>
    </div>
  )
}

export default Title;

