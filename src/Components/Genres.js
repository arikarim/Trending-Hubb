import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const Genres = ({
  genres,
  setGenres,
  selectedgenres,
  setSelectedGenres,
  setPages,
  type,
}) => {

  const fetchGenres = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    
    setGenres(data.genres);
  }
console.log(genres)
useEffect(() => {
  fetchGenres();
  return () => {
    setGenres({});
  }
}, [])

  return (
    <div style={{padding: '6px 0'}}>
      <Chip />
    </div>
  )
}

Genres.propTypes = {

}

export default Genres
