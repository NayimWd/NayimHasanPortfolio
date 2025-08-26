import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { workExperience } from '@/data';
import { Button } from './MovingBorders';

const Experiences = () => {
  return (
    <div className='paddingY' id='experience'>
      <TextGenerateEffect
        className='heading uppercase'
        words={"Progressive Skills Evolution"}
        length1={1}
        length2={3}
        filter={false}
        duration={1}
      />

      <div className='w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
        {
          workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000 + 10000)}
              borderRadius='1.2rem'
              className='flex-1 text-white-100 border-neutral-200 dark:border-slate-800'
            >
              <div className=' p-3 py-6 md:p-5 lg:p-10 '>
                <div className='w-full flex flex-col sm:flex-row gap-10 sm:gap-5 lg:gap-2 items-center'>
                  <img
                    className='lg:w-32 md:w-20 w-16 text-center'
                    src={card.thumbnail} alt="thumbnail" loading='lazy' />

                  <div className='lg:ms-5'>
                    <h1 className='text-start text-xl md:text-2xl font-bold'>
                      {card.title}
                    </h1>
                    <p className='text-start text-white-100 mt-3 font-semibold'>
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Button>
          ))
        }
      </div>
    </div>
  )
}

export default Experiences;