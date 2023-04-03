import React from 'react'
import { useGLobalContext } from '../Context'

const Search = () => {
  const {query, searchPost}=useGLobalContext();
  return (
    <>
    <h1>Welcome To The Tech News Potral</h1>
    <form onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type="text" placeholder='Seach Here...' value={query} onChange={(e)=>searchPost(e.target.value)} />
      </div>
    </form>

    </>
  )
}

export default Search