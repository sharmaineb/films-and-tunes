import './Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className='Title'>
      <header>
        <h1>Film & Tunes</h1>
        <div className='Title-Subtitle'>Grab Your Camera and a Pair of Headphones!</div>
        <div>
        <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/">Films</NavLink>
        <RandomSpace />
        </div>

      </header>
    </div>
  )
}

export default Title;

