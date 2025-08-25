import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Experiences = () => {
  return (
    <div className='py-20' id='experience'>
        <TextGenerateEffect
            words={"Progressive Skills Evolution"}
            length1={1}
        />
        
        <div className='flex flex-col items-center max-lg:mt-10'></div>
    </div>
  )
}

export default Experiences;