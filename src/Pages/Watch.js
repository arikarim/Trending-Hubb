import React from "react";
import Iframe from "react-iframe";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TrendContent from "../Components/TrendContent";

const Watch = () => {
  const popular = useSelector((state) => state.popularMovies);
  const { id } = useParams();

  return (
    <>
      <Iframe
        className="frame"
        url={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`}
        width="100%"
        height="100%"
        allowFullScreen
        frameBorder="0"
      />
      <h1 className="text-center my-3">Popular Movies</h1>
      <div className="trending">
        {popular &&
          popular.map((c, key) => (
            <TrendContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {popular && console.log(popular)}
    </>
  );
};

export default Watch;
