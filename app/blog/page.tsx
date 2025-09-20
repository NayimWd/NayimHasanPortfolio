import Contact from "@/components/Contact";
import BlogCard from "@/components/ui/blog/BlogCard";
import NavMenu from "@/components/ui/NavMenu";
import blogData from "@/data/blog.json"

const Blogs = () => {

  const blogs = blogData.blogs;

  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
      {/* Navbar */}
      <NavMenu />

      {/* Hero Section */}
      <section className="w-full max-w-7xl py-20 sm:py-28 mt-12 text-center border-b border-border/40">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          My{" "}
          <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
            Blogs
          </span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Thoughts, tutorials, and lessons learned during my web development
          journey. Each post is crafted with care to share insights and
          experiences that may help fellow developers.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="w-full max-w-7xl py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  )
}

export default Blogs