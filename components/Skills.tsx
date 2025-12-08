import { skills } from "@/data"
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

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className=" font-medium text-muted-foreground mb-3 capitalize">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 p-3 rounded-xl bg-black-200 text-secondary-foreground shadow-sm hover:scale-105 transition-transform duration-200"
              >
                <img src={item.img} alt={item.name} loading="lazy" className="w-8 h-8 bg-white-200 rounded-full p-1" />
                <span className="text-xs font-medium truncate">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  )
}

export default Skills