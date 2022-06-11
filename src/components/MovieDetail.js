
import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail(props) {
  const movieId =parseInt(useParams().id)
  const movie = props.movies.find(m => m.id ===movieId) 
  console.log(movie);
  return (
    <div className='movie-detail'>
           <div className='movie-detail-text'>
             <span>{movie.title} ({movie.year})</span>
           </div>
           <img src={movie.img} alt='' className='card-img'/>
           <p className='card-desc'>{movie.descrShort}</p>
      </div>
  )
}

export default MovieDetail