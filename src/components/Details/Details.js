import React from 'react'
import { useParams } from 'react-router'
import data from '../../filmtunes-data.js'
import FilmFeatureList from '../FeaturesList.js'
import './Details.css'

function Details(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, features, song, album } = data[id]

  return (
    <div className='Details'>
      <div className='Details-image'>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} />
      </div>
      <div className='Details-info'>
        <h1 className='Details-title'>{ title }</h1>
        <p className='Details-desc'>{ desc }</p>        
        <p><strong>Album & Musician:</strong> { album }</p>
        <p><strong>Song:</strong> { song }</p>
        <FilmFeatureList features={features} />
      </div>

    </div>
  )
}

export default Details