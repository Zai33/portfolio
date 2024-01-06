import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 mt-5'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
                    About
                </p>
            </div>
            <p className='text-xl '>
                I'm Kyaw Zin win Htike, and the world of code calls to me like a siren song. 
                I'm a computer science student on a mission to transform my passion for technology into a career as a frontend developer.
                 With each line of code, I'm building my path, one pixel at a time. 
                 HTML, CSS, and JavaScript—these are my tools, my paintbrushes, shaping digital landscapes that captivate and engage.
                  I'm mastering the art of crafting dynamic user experiences, ensuring every interaction is seamless and intuitive.
            </p>
            <br />
            <p className='text-xl'>
                My code is more than just lines on a screen; it's a manifestation of my creativity,
                my problem-solving skills, and my unwavering determination.
                I envision a future where I'm crafting innovative web experiences that impact lives—whether it's building engaging platforms,
                designing intuitive interfaces, or optimizing performance for seamless interactions.
            </p>
        </div>
    </div>
  )
}

export default About