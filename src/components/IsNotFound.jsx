import React from 'react'

const IsNotFound = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold'>404</h1>
        <h2 className='text-2xl font-bold'>Page Not Found</h2>
        <p className='text-xl'>The page you are looking for does not exist.</p>
        <p className='text-xl'>Please check the URL or go back to the homepage.</p>
        <a href="/" className='text-blue-500 hover:underline'>Go to Homepage</a>
        <p className='text-xl'>If you think this is a mistake, please contact us.</p>
    </div>
  )
}

export default IsNotFound