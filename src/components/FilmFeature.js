import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../filmtunes-data'
import './FilmFeature.css'

function getFeature(props) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const params = useParams()
	const { id } = params // location index
	const { features, title } = data[id]

	return (
		<div className='Details-image'>
 		  <img src={`${process.env.PUBLIC_URL}/images/${features[0]}`} alt={title} />
 		</div>
	)
	

	}

export default getFeature;
