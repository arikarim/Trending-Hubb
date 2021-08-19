import React from "react";
import Iframe from "react-iframe";

const Watch = () => {
  return (
    <>
      <Iframe
        className="frame"
        url="https://www.2embed.ru/embed/tmdb/movie?id=337404"
        width="100%"
        height="100%"
        allowFullScreen
        frameBorder="0"
      />
    </>
  );
};

export default Watch;
