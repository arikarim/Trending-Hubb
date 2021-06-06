import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const Movies = props => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();


  const fetchMovies = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`)
    
    setContent(data.result);
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovies()
  }, [])
  return (
    <span className='pagesTitle'>Movies</span>
  )
}

Movies.propTypes = {

}

export default Movies
