import './FilmSpace.css'
import { Link } from 'react-router-dom'

function FilmSpace(props) {
    const { name, image, id } = props
    return (
      <div className='FilmSpace'>
        <h1>
          <Link to={`/details/${id}`} className='FilmSpace-title'>
            {name}
          </Link>
        </h1>
        <Link to={`/details/${id}`}>
          <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="350" height="300" alt="Hello" />
        </Link>
        <div className='FilmSpace-info'>
        </div>
      </div>
    )
}

export default FilmSpace