import React from "react";
import { img_300, unavailable } from "../config/config";
import { Badge } from "@material-ui/core";
import Model from "../Model/Model";

const TrendContent = ({
  content,
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <Model className="mx-auto" c={content} media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </Model>
  );
};

TrendContent.propTypes = {};

export default TrendContent;
