import React from 'react'

const Portfolio = () => {

  const portfolios = [
    {
      id : 1,
      img : require("../assets/portfolio/arrayDestruct.jpg")
    },
    {
      id : 2,
      img : require("../assets/portfolio/reactParallax.jpg")
    },
   {
      id : 3,
      img : require("../assets/portfolio/navbar.jpg")
    },
    {
      id : 4,
      img : require("../assets/portfolio/reactSmooth.jpg")
    },
    {
      id : 5,
      img : require("../assets/portfolio/installNode.jpg")
    },
    {
      id : 6,
      img : require("../assets/portfolio/reactWeather.jpg")
    }
  ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg mx-auto px-4 flex flex-col w-full h-full justify-center'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>
            Portfolio
          </p>
          <p className='py-6'>
            Check out some of my work right here.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({id,img}) => (
              
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={img} alt="" 
                    className='rounded-md duration-200 hover:scale-105'/>
                  <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                      Demo
                    </button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                      Code
                    </button>
                  </div>
                </div>
            ))
          }
        </div>

        

      </div>
    </div>
  )
}

export default Portfolio