import React from 'react'
import PropTypes from 'prop-types'
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { dark } from '@material-ui/core/styles/createPalette';

const darkTheme = createMuiTheme({
  palette:{
    type: 'dark',
  }
})

const Paginationn = ({setPage, numOfPages= 15}) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0,0);
  }
  return (
    <div 
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
      }} >
        <ThemeProvider theme={darkTheme}>
          <Pagination count={numOfPages} onChange={(e) => handlePageChange(e.target.textContent)}/>
        </ThemeProvider>
    </div>
  )
}

Paginationn.propTypes = {

}

export default Paginationn
