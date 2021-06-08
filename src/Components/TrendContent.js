import React from 'react'
import { img_300, unavailable } from '../config/config'
import { Badge } from '@material-ui/core'
import Model from '../Model/Model'

const TrendContent = ({id, poster,title, date, media_type, vote_average}) => {
  return (
    <Model media_type={media_type} id={id}>
      <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'} />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b style={{color:"#FEE715FF"}} className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </Model>
  )
}

TrendContent.propTypes = {

}

export default TrendContent
