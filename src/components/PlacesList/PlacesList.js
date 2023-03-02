import React from 'react';
import PlacesSpace from '../PlacesSpace/PlacesSpace';
import './PlacesList.css';
import data from '../../places-data.js'
import { useState } from 'react'

function PlacesList() {
  const [ query, setQuery ] = useState('');
  const spaces = data.filter((obj) => {
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
    return inTitle || inAddress })
  .map(({ title, address, images, id } ) => {
    return (
      <PlacesSpace
        id={id}
        key={`${title}-${id}`} 
        name={title}
        address={address}
        image={images[0]}
      />
    )
  })

  return (
    <div className="PlacesList">
			<form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</form>
			{spaces}
    </div>
  )
  
}
  

export default PlacesList