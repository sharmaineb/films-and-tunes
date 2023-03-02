import React from 'react'
import FilmFeature from './FilmFeature'
import './FeatureList.css'

function FeatureList(props) {
	const icons = props.features.map((feature) => {
    return <FilmFeature key={feature} name={feature} />
  })
	return <div className="FeatureList">{icons}</div>
}

export default FeatureList