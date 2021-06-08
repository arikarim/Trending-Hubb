import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';

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
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}