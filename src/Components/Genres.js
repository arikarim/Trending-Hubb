import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Chip } from '@material-ui/core'

const Genres = ({
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
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

const handleAdd = (genre) => {
  setSelectedGenres([...selectedGenres, genre]);
  setGenres(genres.filter(g => g.id != genre.id));
  setPage(1);
};

const handleRemove= (genre) => {
  setSelectedGenres(selectedGenres.filter((g) => g.id != genre.id));
  setGenres([...genres, genre]);
  setPage(1);
};
  return (
    <div style={{padding: '6px 0', width: '100%'}}>
      {selectedGenres && selectedGenres.map((genre) => (
        <Chip
         label={genre.name} 
         size='small' 
         color='secondary'
         key={genre.id} 
         style={{margin: 2}} 
         clickable 
          onClick={() => handleRemove(genre)} />
      ))}
      {genres && genres.map((genre) => (
        <Chip
         label={genre.name} 
         size='small' 
         key={genre.id} 
         style={{margin: 2}} 
         clickable 
         onClick={() => handleAdd(genre)} />
      ))}
    </div>
  )
}

Genres.propTypes = {

}

export default Genres
