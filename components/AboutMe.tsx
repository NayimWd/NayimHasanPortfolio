import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Button } from './MovingBorders'

const AboutMe = () => {
  return (
    <div className='paddingY'>
        <TextGenerateEffect
        className='heading'
        words={"About Me"}
        length1={0}
        length2={2}
        filter={false}
        duration={1}
      />

      <Button
        duration={Math.floor(Math.random() * 10000 + 10000)}
        borderRadius='1.2rem'
        className=' text-white-100  p-3 py-6 md:p-5 lg:p-10 shadow-xl bg-black-100'
       
      >
        <div>
        <p className="text-start md:tracking-wide leading-10 mb-3 text-sm md:text-lg lg:text-xl">
          I'm a Frontend-Focused MERN Stack Developer who transforms complex ideas into seamless digital experiences. Specializing in React, Next.js, and TypeScript, I craft modern web applications that users love to interact with.
        </p>
        <p className="text-start md:tracking-wide leading-10 mb-3 text-sm md:text-lg lg:text-xl py-2">
          I thrive on solving challenging problems with clean, scalable code while staying curious about emerging technologies. From building responsive frontends with Tailwind CSS to architecting robust backends with Node.js and MongoDB, I bring both technical precision and creative vision to every project.
        </p>
        <p className="text-start md:tracking-wide leading-10 mb-3 text-sm md:text-lg lg:text-xl">
           Currently seeking opportunities to contribute to innovative products alongside teams who value quality, growth, and pushing the boundaries of what's possible on the web.
        </p>
        </div>
      </Button>

        </div>
  )
}

export default AboutMe