import projectData from "@/data/project.json"
import { PinContainer } from "./ui/project/Card3d";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./ui/project/ProjectCard";

const Projects = () => {

    const projects = projectData.projects;


    return (
        <div id="projects" className="paddingY">
            <h1 className="heading">
                A small selection of my{' '}
                <span className="text-purple"> recent projects </span>
            </h1>
            {/* Project Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
                {projects.map(({id, image, title, description, tags, liveUrl, githubUrl}) => (
                    <ProjectCard
                        key={id}
                        image={image}
                        title={title}
                        description={description}
                        technologies={tags} // you already have badges
                        liveUrl={liveUrl}
                        githubUrl={githubUrl}
                        detailsUrl={`/project/${id}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects