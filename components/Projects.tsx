import { projects } from "@/data"
import { PinContainer } from "./ui/project/Card3d";
import { ExternalLink } from "lucide-react";

const Projects = () => {
    return (
        <div className="py-20">
            <h1 className="heading">
                A small selection of my{' '}
                <span className="text-purple"> recent projects </span>
            </h1>
            {/* Project Cards */}
            <div className="flex flex-wrap items-center justify-center px-4 gap-x-24 ">
                {
                    projects.map(({ id, title, des, img, iconLists, link }) => {
                        return (
                            <div
                                className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                                key={id}
                            >
                                <PinContainer title={title} href={link}>
                                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] mb-10 overflow-hidden">
                                        <div
                                            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                            style={{ backgroundColor: "#13162D" }}
                                        >
                                            <img src="/bg.png" alt="bgimg" />
                                        </div>
                                        <img
                                            className="z-10 absolute bottom-0 object-cover bg-center"
                                            src={img}
                                            alt="project Image"
                                        />
                                    </div>

                                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                        {title}
                                    </h1>

                                    <p
                                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                        style={{
                                            color: "#BEC1DD",
                                            margin: "1vh 0",
                                        }}
                                    >
                                        {des}
                                    </p>

                                    <div className="flex items-center justify-between mt-7 mb-3">
                                        <div className="flex items-center">
                                            {iconLists.map((icon, index) => (
                                                <div
                                                    key={index}
                                                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                    style={{
                                                        transform: `translateX(-${5 * index + 2}px)`,
                                                    }}
                                                >
                                                    <img src={icon} alt="icon" className="p-2" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                                Check Live Site
                                            </p>
                                            <ExternalLink className="ms-3" color="#CBACF9" />
                                        </div>
                                    </div>
                                </PinContainer>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Projects