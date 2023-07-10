import React from 'react'
import loading from './my.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="Loading Data" />
    </div>
  )

}

export default Spinner