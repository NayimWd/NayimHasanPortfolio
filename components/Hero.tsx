import { cn } from "@/lib/utils"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { Download, Rocket } from "lucide-react"

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight width={100} className="" />
            </div>

            <div className="relative flex  w-full items-center justify-center bg-white dark:bg-black-100 h-screen dark:bg-grid-white-[0.3] bg-grid-black-[0.2]">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />


                <div className="flex justify-center absolute top-0 left-0 my-20 z-10 w-full">
                    <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
                        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80]">
                            Building Modern Web Experiences
                        </h2>
                        <TextGenerateEffect
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                            words="Turning Ideas into Interactive User-Friendly Applications"
                            duration={2}
                            filter={false}
                            length1={2}
                            length2={5}
                        />
                        <p className="text-center md:tracking-wider mb-3 text-sm md:text-lg lg:text-2xl">
                            Hi, I'm Naim — I develop responsive web applications using React, Next.js, and the MERN stack, with a focus on creating intuitive user experiences and clean, maintainable code.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">
                            <MagicButton title="Download Resume" icon={<Download size={16} className="text-green-500" />} position="right" />
                            <MagicButton title="Explore Portfolio" icon={<Rocket size={16} className="text-red-500" />} position="right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

