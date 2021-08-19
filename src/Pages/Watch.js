import React from "react";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";

const Watch = () => {
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
    </>
  );
};

export default Watch;
