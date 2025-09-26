import Badge from "@/components/ui/Badge"
import projects from "@/data/project.json"
import { AlertCircle, ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

interface ProjectDetailsProps {
  params: Promise<{ id: string }>,
}

export async function generateMetadata(
  {params}: ProjectDetailsProps
): Promise<Metadata> {

  const { id } = await params;

  const project =  projects.projects.find((p) => p.id === id);

  if (!project) return { title: "Project Not Found | Nayim Hasan" };

  return {
    title: `${project.title} | Nayim Hasan`,
    description: project.description,
  };
}

export default async function ProjectDetails({params}: ProjectDetailsProps) {

  const { id } = await params;

  const project =  projects.projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 text-foreground px-4 text-center">
        <AlertCircle size={60} className="text-destructive mb-4 animate-bounce" />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-destructive">❌ Project Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Oops! The project you are looking for doesn’t exist or has been removed. Please check back later or explore other projects.
        </p>
        <Link
          href="/home"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple/20 to-black-300 text-primary font-medium shadow-md hover:shadow-lg transition hover:opacity-90"
        >
          <ArrowLeft size={20} /> Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto min-h-screen bg-black-100 paddingY px-4 sm:px-6  lg:px-8">
      <Link href="/#projects">
        <div className="flex gap-2.5 items-center mb-10 md:mb-12 cursor-pointer py-2 px-4 w-40 rounded hover:bg-black-200"> <ArrowLeft size={18} /> Back to home</div>
      </Link>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side */}
        <div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-black-200 border-border" variant="secondary">
              {
                project.category
              }
            </Badge>
            <Badge variant="outline">
              {
                project.year
              }
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            {project.title}
          </h1>

          {/* Short Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple/20 to-black-200 text-primary font-medium shadow-md hover:shadow-lg transition hover:opacity-90"
            >
              <ExternalLink size={20} /> View Live Site
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 flex gap-2 items-center py-2.5 rounded-lg bg-gradient-to-r from-purple/20 to-black-200 border border-white/10 text-primary font-medium hover:opacity-90 transition shadow-lg"
            >
              <Github size={20} /> View Code
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col gap-3 p-4 rounded-lg bg-black-200 border border-border">
              <p className=" text-sm text-muted-foreground">⏳ Timeline</p>
              <p className="font-semibold text-foreground">{project.duration}</p>
            </div>
            <div className="flex flex-col gap-3 p-4 rounded-lg bg-black-200 border border-border">
              <p className="text-sm text-muted-foreground">👤 Client</p>
              <p className="font-semibold text-foreground">{project.client}</p>
            </div>
            <div className="flex flex-col gap-3 p-4 rounded-lg bg-black-200 border border-border">
              <p className="text-sm text-muted-foreground">📂 Category</p>
              <p className="font-semibold text-foreground">{project.category}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-lg border border-border object-cover"
          />
        </div>
      </div>

      {/* Project Overview */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">📖 Project Overview</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          {project.longDescription}
        </p>

        {/* Features */}
        <h2 className="text-2xl font-semibold mb-4 text-foreground">✨ Key Features</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground mb-10">
          {project.features?.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary">✔</span> {feature}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <h2 className="text-2xl font-semibold mb-4 text-foreground">🛠 Technologies Used</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {Object.entries(project.technologies).map(([category, techs], i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-black-200 border border-border"
            >
              <p className="font-semibold mb-2 text-foreground">{category}</p>
              <div className="flex flex-wrap gap-2">
                {(techs as string[]).map((t, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Challenges */}

        {project.challenges && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              🧩 Challenges & Solutions
            </h2>
            <div className="space-y-4">
              {project.challenges.map((ch: string, i: number) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-black-200 border border-border flex items-start gap-3"
                >
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {i + 1}
                  </span>
                  <p className="text-foreground">{ch}</p>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="mt-12">
          {project.learnings && (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                📚 Growth & Learning
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.learnings.map((learn: string, i: number) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-black-200 border border-border flex items-start gap-3"
                  >
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                      {i + 1}
                    </span>
                    <p className="text-foreground">{learn}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
