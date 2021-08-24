import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import { img_500, unavailable, unavailableLandscape } from "../config/config";
import { Button } from "@material-ui/core";
import { YouTube } from "@material-ui/icons";
import "./Model.css";
import Carousel from "../Components/carousel/Carousel";
import { Link, useHistory } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.87)",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function Model({ c, children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [season, setSeason] = useState();
  const [ep, setEp] = useState();
  const history = useHistory();
  // const [style, setStyle] = useState({});
  const [fliped, setFliped] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&lanfuage=en-US`
      );

      setContent(data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchVideo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&lanfuage=en-US`
      );

      setVideo(data.results[0]?.key);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  const style = {
    backgroundImage: `linear-gradient(to right, rgba(0,22,78,.8), rgba(0,22,48,.8)),url(${
      img_500 + c?.poster_path
    })`,
    backgroundSize: "cover",
  };

  const onHover = () => {
    setFliped(true);
  };

  const onLeave = () => {
    setFliped(false);
  };

  return (
    <div className="position-relative col-10 px-md-3 col-md-4 col-lg-3">
      <ReactCardFlip
        flipSpeedBackToFront={0.4}
        flipSpeedFrontToBack={0.4}
        isFlipped={fliped}
        flipDirection="vertical"
      >
        <div onMouseEnter={onHover} className="media mx-auto" type="button">
          {children}
        </div>
        <div
          onClick={handleOpen}
          style={style}
          className="media mx-auto d-flex flex-column align-items-center"
          onMouseLeave={onLeave}
        >
          <h4 className="text-center tit">{c?.original_title}</h4>
          <p className="desc">
            <span className="span-color mr-2">Vote:</span> {c?.vote_average}
          </p>
          <p className="desc">
            <span className="span-color mr-2">Lamguage:</span>{" "}
            {c?.original_language}
          </p>
          <p className="desc">
            <span className="span-color mr-2">Release:</span> {c?.release_date}
          </p>
          <p className="desc">
            <span className="span-color mr-2">Overview:</span> {c?.overview}
          </p>
        </div>
      </ReactCardFlip>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>

                  <div>
                    <Carousel id={id} media_type={media_type} />
                  </div>

                  <Button
                    variant="contained"
                    startIcon={<YouTube />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                  {media_type === "movie" && (
                    <Link className="btn btn-primary my-2" to={`/watch/${id}`}>
                      watch
                    </Link>
                  )}
                  {media_type === "tv" && (
                    <div>
                      <form
                        onSubmit={() =>
                          history.push(`/watch/${id}/${season}/${ep}`)
                        }
                      >
                        <input
                          className="form-control my-2 inputs"
                          type="number"
                          placeholder="season"
                          onChange={(e) => setSeason(e.target.value)}
                          required
                        />
                        <input
                          className="form-control my-2 inputs"
                          type="number"
                          placeholder="episode"
                          onChange={(e) => setEp(e.target.value)}
                          required
                        />
                        <button className="btn btn-primary my-2" type="submit">
                          watch
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
