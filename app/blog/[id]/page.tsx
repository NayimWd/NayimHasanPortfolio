import blogData from "@/data/blog.json";
import { Calendar, Clock, Github, ExternalLink, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation"
import Image from "next/image";
import { parseHtml } from "@/lib/domPurify";
import Link from "next/link";

interface blogProps {
  params: { id: string };
}

const page = async (Props: blogProps) => {

  const { id } = await Props.params;

  const blogs = blogData.blogs;

  const blog = await blogs.find((b) => b.id === id)

  if (!blog?.id) return notFound();

  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
      
      {/*  Cover */}
      <section className="w-full max-w-5xl py-12 sm:py-20 text-center">
        <Link href="/blog">
        <div className="flex gap-2.5 items-center mb-10 md:mb-12 cursor-pointer py-2 px-4 w-40 rounded hover:bg-black-200"> <ArrowLeft size={18} /> Back to Blog</div>
      </Link>
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="mt-8 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          {blog.title}
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          {blog.description}
        </p>

        {/* Meta Info */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Image
              src={blog.author.profileImage}
              alt={blog.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{blog.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} /> <span>{blog.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} /> <span>{blog.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="prose prose-invert prose-lg max-w-4xl w-full pb-20">
        <article
          dangerouslySetInnerHTML={parseHtml(blog.content)}
          className="prose-headings:scroll-mt-20 prose-headings:font-bold prose-p:leading-relaxed prose-img:rounded-lg prose-pre:bg-black-200 prose-code:text-primary"
        />
      </section>

      {/* Tags + Links */}
      <section className="max-w-4xl w-full border-t border-border/40 pt-8 mb-20">
        <div className="flex flex-wrap gap-3 mb-6">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {blog.links.github && (
            <a
              href={blog.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary transition"
            >
              <Github size={18} /> GitHub Repo
            </a>
          )}
          {blog.links.demo && (
            <a
              href={blog.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-primary transition"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </section>
    </main>
  )
}

export default page