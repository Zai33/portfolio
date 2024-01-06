import React from 'react'

const Experience = () => {

    const experiences = [
        {
            id : 1,
            img : require("../assets/html.png"),
            text : 'HTML',
            style : 'shadow-orange-500'
        },
        {
            id : 2,
            img : require("../assets/css.png"),
            text : 'CSS',
            style : 'shadow-blue-500'
        },
        {
            id : 3,
            img : require("../assets/javascript.png"),
            text : 'JAVASCRIPT',
            style : 'shadow-yellow-500'
        },
        {
            id : 4,
            img : require("../assets/github.png"),
            text : 'GITHUB',
            style : 'shadow-white'
        },
        {
            id : 5,
            img : require("../assets/node.png"),
            text : 'NEXT JS',
            style : 'shadow-green-600'
        },
        {
            id : 6,
            img : require("../assets/react.png"),
            text : 'REACT',
            style : 'shadow-cyan-500'
        },
        {
            id : 7,
            img : require("../assets/tailwind.png"),
            text : 'TAILWIND.CSS',
            style : 'shadow-sky-600'
        },
        {
            id : 8,
            img : require("../assets/graphql.png"),
            text : 'GraphQl',
            style : 'shadow-pink-500'
        }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='mt-7'>
                <div className=''>
                    <p className='text-4xl font-bold border-b-2 border-gray-500 inline p-2'>Experiences</p>
                    <p className='py-6'>These are technologies I've worked with...</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    
                        {
                            experiences.map(({id,img,text,style}) => (
                                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                    <img src={img} alt='' className='w-20 mx-auto' />
                                    <p className='mt-4'>{text}</p>
                                </div>
                                
                            ))
                        }

                
                </div>

            </div>
        </div>
    </div>
  )
}

export default Experience