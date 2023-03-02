import React from 'react';
import FilmSpace from '../FilmSpace/FilmSpace';
import './List.css';
import data from '../../filmtunes-data.js'
import { useState } from 'react'

function List() {
  const [ query, setQuery ] = useState('');
  const spaces = data.filter((obj) => {
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    return inTitle})
  .map(({ title, images, id, features } ) => {
    return (
      <FilmSpace
        id={id}
        key={`${title}-${id}`} 
        image={images[0]}
      />
    )
  })

  return (
    <div className="Search">
			<form>
				<input
					value={query}
					placeholder="Search By Film Brand"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</form>
			<div className="List">
        { spaces.length > 0 ? spaces : "No results match your search" } 
      </div>
    </div>
  )
  
}
  

export default List