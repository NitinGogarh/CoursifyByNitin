import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SearchBar = () => {
    const navigate = useNavigate()
    const [search,setSearch] = useState("")
    const handleSearch = ()=>{
        const trimmedStr = search.trim().toLowerCase().replace(/\s+/g, '');
        navigate(`/searchcourse/${trimmedStr}`)
        return
    }
  return (
    <Container>
      <div className="search">
        <input type="text"  value={search} onChange={(e)=>{setSearch(e.target.value)}} className='searchInput' placeholder='Search Courses Here'/>
        <button onClick={handleSearch} className='searchButton'>Search</button>
      </div>
    </Container>
  )
}
const Container = styled.div`
margin-top: 12px;
text-align: center;
.searchInput{
    height: 50px;
    font-size: 23px;
    width: 60%;
    border-top-left-radius: 20px;
     border-bottom-left-radius: 20px;
     padding-left: 12px;
}
.searchButton{
  height: 50px;
  font-size: 24px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #bed3e4;

}
`
export default SearchBar