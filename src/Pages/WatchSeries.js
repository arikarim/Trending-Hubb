import axios from "axios";
import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TrendContent from "../Components/TrendContent";

const WatchSeries = () => {
  const popular = useSelector((state) => state.popularTv);
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const { id, season, ep } = useParams();
  const [seasonNumber, setSeasonNumber] = useState(season);

  const fetchSeriesdetails = async (tv_id) => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setSeasons(data.data.seasons);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchEpisodes = async (tv_id, seasonNumber) => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/tv/${tv_id}/season/${seasonNumber}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setEpisodes(data.data.episodes);
      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const onUpdate = (e) => {
    setSeasonNumber(e.target.id);
    fetchEpisodes(id, e.target.id);
  };
  // useEffect(() => {
  //   fetchEpisodes(id, seasonId);
  // }, [id, seasonId]);
  useEffect(() => {
    fetchSeriesdetails(id);
    fetchEpisodes(id, 1);
  }, [id]);
  return (
    <>
      {/* <Iframe
        className="frame"
        url={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${seasonNumber}&e=${ep}`}
        width="100%"
        height="100%"
        allowFullScreen
        frameBorder="0"
      /> */}

      <div className="d-flex my-3">
        <div className="col-4">
          <ul className="list-unstyled seasons">
            {seasons.map((s, i) => (
              <li id={i + 1} onClick={(e) => onUpdate(e)} key={s.id}>{`Season ${
                i + 1
              }`}</li>
            ))}
          </ul>
        </div>

        <div className="col-8">
          <ul className="list-unstyled d-flex flex-wrap episodes">
            {episodes.map((e, i) => (
              <li className="col-6" key={e.id}>{`Episode ${i + 1}: ${
                e.name
              }`}</li>
            ))}
          </ul>
          {episodes && console.log(episodes)}
        </div>
      </div>
      <h1 className="text-center my-3">Popular Tv Series</h1>
      <div className="trending">
        {popular &&
          popular.map((c, key) => (
            <TrendContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </>
  );
};

export default WatchSeries;
