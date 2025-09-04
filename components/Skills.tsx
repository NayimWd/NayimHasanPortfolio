import { skills} from "@/data"
import { InfiniteMovingCards } from "./ui/skills/InfiniteMovingCards"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"

const Skills = () => {
  return (
    <div id="skills" className="w-full paddingY ">
        <TextGenerateEffect
                className='heading uppercase mb-10'
                words={"Tech Stack & Tools"}
                length1={1}
                length2={3}
                filter={false}
                duration={1}
              />

        <InfiniteMovingCards
            items={skills}
            direction="left"
            speed="fast"
        />
       
    </div>
  )
}

export default Skills