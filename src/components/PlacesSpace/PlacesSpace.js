import './PlacesSpace.css'
import { Link } from 'react-router-dom'

function PlacesSpace(props) {
    const { name, image, address, id } = props
    return (
      <div className='PlacesSpace'>
        <h1>
          <Link to={`/details/${id}`} className='PlacesSpace-title'>
          </Link>
        </h1>
        <Link to={`/details/${id}`}>
          <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
        </Link>
        <div className='PlacesSpace-title'>{name}</div>
        <div className='PlacesSpace-info'>
          <div>{address}</div>
        </div>
      </div>
    )
}

export default PlacesSpace