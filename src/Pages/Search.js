import React, { useState } from 'react'
import { Button, createMuiTheme, Tab, Tabs, TextField, ThemeProvider } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const Search = props => {
  const [searchText, setSearchText] = useState("")
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState();
  const [numOfPages, setNumOfPages] = useState(1);


const darkTheme = createMuiTheme({
  palette:{
    type: 'dark',
    primary: {
      main: "#fff",
    }
  }
})

const 
  return (
    
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{display: 'flex',margin:"15px 0"}}>
          <TextField 
            style={{flex:1}} 
            label="search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)} 
            />

          
          <Button variant="contained" style={{marginLeft: 10}} >
            <SearchIcon />
          </Button>
        </div>

        <Tabs 
          value={type} 
          indicatorColor="primary" 
          textColor="primary"
          onChange={(event, newVal)=> {
            setType(newVal)
            setPage(1)
          }}
          >
          <Tab style={{width: "50%" }} label="Search Movies" />
          <Tab style={{width: "50%" }}label="Search TV Series" />
        </Tabs>
      </ThemeProvider>
    </div>
  )
}

Search.propTypes = {

}

export default Search
