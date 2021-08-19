import React from "react";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";

const WatchSeries = () => {
  const { id, season, ep } = useParams();
  return (
    <>
      <Iframe
        className="frame"
        url={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${season}&e=${ep}`}
        width="100%"
        height="100%"
        allowFullScreen
        frameBorder="0"
      />
    </>
  );
};

export default WatchSeries;
