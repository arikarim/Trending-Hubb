import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paginationn from '../Components/Pagination/Paginationn';
import TrendContent from '../Components/TrendContent';
import Genres from '../Components/Genres';
import usegenres from '../hooks/useGenre';

const Movies = props => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = usegenres(selectedGenres);

  const fetchMovies = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
    
    setContent(data.results);
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, selectedGenres])
  return (
    <div>

      <span className='pagesTitle'>Movies</span>
      <Genres
        genres={genres} 
        setGenres={setGenres} 
        selectedGenres={selectedGenres} 
        setSelectedGenres={setSelectedGenres} 
        setPage={setPage}
        type="movie" />
      <div className="trending">
          {
            content && content.map((c) =>
             <TrendContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name} 
              date={c.first_air_date || c.release_date}
              media_type='movie'
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
