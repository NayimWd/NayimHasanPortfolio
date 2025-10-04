import { cn } from "@/lib/utils";
import Image from "next/image";
import Badge from "../Badge";
import Link from "next/link";
import { ExternalLink, Github, Info } from "lucide-react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  detailsUrl: string;
  githubUrl: string;
  className?: string;
}

const ProjectCard = ({ image, title, description, technologies, liveUrl, detailsUrl, githubUrl, className }: CardProps) => {
  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-black-200 text-card-foreground shadow-sm transition-all hover:shadow-lg ",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill={true}
          className="object-cover transition-transform duration-500 w-full group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 
             (max-width: 768px) 50vw, 
             33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="px-2 py-0.5 text-xs font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          {/* Live */}
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-gradient-to-r from-black-300 to-purple/20 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            <ExternalLink className="h-4 w-4" />
            Live
          </Link>

          {/* GitHub */}
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-black-300 px-4 py-2 text-sm font-medium text-foreground shadow-md transition hover:opacity-90"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>

          {/* Details */}
          <Link
            href={detailsUrl}
            className="flex items-center gap-2 rounded-md border bg-gradient-to-r from-purple/20 to-black-300 border-border px-4 py-2 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground shadow-md"
          >
            <Info className="h-4 w-4" />
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard