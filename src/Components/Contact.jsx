import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-800 w-full h-screen p-4 text-white'>
      <div className='flex flex-col justify-center max-w-screen-lg mx-auto p-4 h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 inline border-gray-500'>
            Contact
          </p>
          <p className='py-6'>Sumit the form below to get in touch with me..</p>
        </div>

        <div className='flex justify-center items-center'>
          <form 
            className='flex flex-col w-full md:w-1/2'
            action='https://getform.io/f/01842c28-3c68-484b-9f89-fedbc98cf295'
            method='POST'
          >
            <input 
              type='text' 
              name='name' 
              placeholder='Enter your name' 
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input 
              type='text' 
              name='email' 
              placeholder='Enter your email' 
              className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea 
              name='message' 
              rows={10}
              placeholder='Enter your message'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            >

            </textarea>
            <button
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto my-8 flex items-center rounded-md hover:scale-110 duration-300'
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact