import { cn } from "@/lib/utils"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import {  Rocket } from "lucide-react"

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
                            Dynamic Web Magic With Next.js
                        </h2>
                        <TextGenerateEffect
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                            words="Transforming Concepts into Seamless Experiences"
                            duration={2}
                            filter={false}
                        />
                        <p className="text-center md:tracking-wider mb-3 text-sm md:text-lg lg:text-2xl">
                            Hi, I'am Nayim, a Frontend Focused Mern Stack Developer
                        </p>
                        <MagicButton title="Show my work" icon={<Rocket size={16} />} position="right" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

