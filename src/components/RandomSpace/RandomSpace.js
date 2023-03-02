import { useNavigate } from 'react-router-dom'
import './RandomSpace.css';
import data from '../../filmtunes-data.json'

function RandomSpace() {
	const navigate = useNavigate()
  return (
		<button 
    className="RandomSpace"
    onClick={(e) => {
			const id = Math.floor(Math.random() * data.length)
			navigate(`/details/${id}`)
		}}>PICK FOR ME</button>
  )
}

export default RandomSpace