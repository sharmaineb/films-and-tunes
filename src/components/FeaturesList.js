import React from 'react'
import FilmFeature from './FilmFeature'
import './FeatureList.css'

function FilmFeatureList(props) {
	const icons = props.features.map((feature) => {
    return <FilmFeature key={feature} name={feature} />
  })
	return <div className="FilmFeatureList">{icons}</div>
}

export default FilmFeatureList