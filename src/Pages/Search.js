import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, createMuiTheme, Tabs, TextField, ThemeProvider } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const Search = props => {
  const [type, setType] = useState(0)


const darkTheme = createMuiTheme({
  palette:{
    type: 'dark',
    primary: {
      main: "#fff",
    }
  }
})
  return (
    
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{display: 'flex',margin:"15px 0"}}>
          <TextField 
            style={{flex:1}} 
            label="search"
            variant="filled"
            // onChange={(e) => setSearchText(e.target.value)} 
            />

          
          <Button variant="contained" style={{marginLeft: 10}} >
            <SearchIcon />
          </Button>
        </div>

        <Tabs value={type}>

        </Tabs>
      </ThemeProvider>
    </div>
  )
}

Search.propTypes = {

}

export default Search
