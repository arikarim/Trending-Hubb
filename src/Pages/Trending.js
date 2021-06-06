import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import TrendContent from '../Components/TrendContent';
import Paginationn from '../Components/Pagination/Paginationn';

const Trending = props => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    setContent(data.results);
  }

  useEffect(() => {
   fetchTrending()
   // eslint-disable-next-line
  }, [page])

  return (
    <div>
      <span className='pagesTitle'>Trending</span>
      <div className="trending">
        {
          content && content.map((c, key) =>
           <TrendContent
            key={c.id}
            poster={c.poster_path}
            title={c.title || c.name} 
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average} />)
        }
      </div>
      <Paginationn setPage={setPage} />
    </div>
  )
}

Trending.propTypes = {

}

export default Trending
