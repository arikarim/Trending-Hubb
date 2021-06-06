import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Paginationn from '../Components/Pagination/Paginationn';
import TrendContent from '../Components/TrendContent';

const Movies = props => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();


  const fetchMovies = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`)
    
    setContent(data.results);
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovies()
  }, [page])
  return (
    <div>

      <span className='pagesTitle'>Movies</span>
      <div className="trending">
          {
            content && content.map((c, key) =>
             <TrendContent
              key={c.id}
              poster={c.poster_path}
              title={c.title || c.name} 
              date={c.first_air_date || c.release_date}
              media_type='Movie'
              vote_average={c.vote_average} />)
          }
        </div>
        {numOfPages > 1 &&
        <Paginationn setPage={setPage} numOfPages={numOfPages} />
        }
    </div>
  )
}

Movies.propTypes = {

}

export default Movies
