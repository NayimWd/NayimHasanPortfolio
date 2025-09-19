import blogData from "@/data/blog.json";
import BlogCard from "./ui/blog/BlogCard";

const BlogSection = () => {

    const blogs = blogData.blogs.slice(0, 3);

    return (
        <section id="blogs" className="paddingY">
            <h1 className="heading">
                My Recent{' '}
                <span className="text-purple"> knowledge </span>
            </h1>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
                {
                    blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                }
            </div>
        </section>
    )
}

export default BlogSection;