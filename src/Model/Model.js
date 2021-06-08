import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import { img_500, unavailable, unavailableLandscape } from '../config/config';
import { Button } from '@material-ui/core';
import { YouTube } from '@material-ui/icons';
import './Model.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '90%',
    height: '80%',
    backgroundColor: '#39445a',
    border: '1px solid #282c34',
    borderRadius: 10,
    color: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function Model({children, media_type, id}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${ media_type }/${id}?api_key=${process.env.REACT_APP_API_KEY}&lanfuage=en-US`)
    
    setContent(data);
  }

  const fetchVideo = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${ media_type }/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&lanfuage=en-US`)
    
    setVideo(data.results[0]?.key)
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, [])

  return (
    <div>
      <button className="media" type="button" onClick={handleOpen}>
        {children}
      </button>
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
          { content && (
          <div className={classes.paper}>
            <div className='ContentModal'>
              <img className='content_portrait' src={content.poster_path?`${img_500}/${content.poster_path}`:unavailable } />
              <img className='ContentModal__landscape' src={content.backdrop_path?`${img_500}/${content.backdrop_path}`:unavailable } />

              <div className='ContentModal__about'>
                <span className="ContentModal__title">
                  {content.name || content.title} (
                    {(
                      content.first_air_date || content.release_date || '-----'
                    ).substring(0,4)}
                  )
                </span>
                {content.tagline && (
                  <i className='tagline'>{content.tagline}</i>
                )}
                <span className='ContentModal__description'>
                  {content.overview}
                </span>

                <div>

                </div>
                <Button 
                  variant='contained'
                  startIcon={<YouTube />}
                  color='secondary'
                  target='__blank'
                  href={`https://www.youtube.com/watch?v=${video}`}
                   >
                     Watch the Trailer
                </Button>
              </div>
            </div>
          </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}