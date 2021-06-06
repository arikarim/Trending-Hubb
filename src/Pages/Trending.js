import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import TrendContent from '../Components/TrendContent';

const Trending = props => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
    setContent(data.results);
  }

  useEffect(() => {
   fetchTrending()
  }, [])

  return (
    <div>
      <span className='pagesTitle'>Trending</span>
      <div className="trending">
        {
          content && content.map((c,key) => {
            <TrendContent data={c} />
          })
        }
      </div>
    </div>
  )
}

Trending.propTypes = {

}

export default Trending
