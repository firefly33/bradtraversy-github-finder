import React from 'react'
import spinner from './assets/spinner.gif'
function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img className='text-center mx-auto' src={ spinner } alt="Loading..." width={100}></img>
    </div>
  )
}

export default Spinner