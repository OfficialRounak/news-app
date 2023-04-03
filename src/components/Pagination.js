import React from 'react'
import { useGLobalContext } from '../Context';

const Pagination = () => {
  const {page,nbPages,getNextPage,getPrevPage }= useGLobalContext() ; 
  return (
    <>
    <div className="pagination-btn">
      <button onClick={()=>getPrevPage()}>prev</button>
      <p className='pagination-display'>
        {page+1} of {nbPages}
      </p>
      <button onClick={()=>getNextPage()}>next</button>
    </div>
    </>
  )
}

export default Pagination