import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  document.title='GoMarkho Not Found'

  return (
    <main className='w-full h-screen flex items-center justify-center flex-col'>
      <h1 className='text-black font-extrabold text-[150px]'>4 <span className='text-sky-500 mx-0 px-0'>0</span> 4</h1>
      <Link to="/" className="btn-primary-lg" >Go to home page</Link>
    </main>
  )
}

export default NotFound