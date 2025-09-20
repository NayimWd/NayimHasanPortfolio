import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Github, ExternalLink, ArrowRight } from "lucide-react";
import Badge from "../Badge";

interface BlogCardProps {
    blog: {
        id: string;
        title: string;
        slug: string;
        description: string;
        coverImage: string;
        tags: string[];
        category: string;
        author: {
            name: string;
            role: string;
            profileImage: string;
        };
        time: string;
        readingTime: string;
        links?: {
            github?: string;
            demo?: string;
        };
    };
}

const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <div className="group flex flex-col bg-black-200 border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            {/* Cover Image */}
            <div className="relative w-full h-52 overflow-hidden">
                <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    sizes="100"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">
                {/* Category + Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <Badge variant="outline">{blog.category}</Badge>
                    <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1">
                            <Calendar size={14} /> {blog.time}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock size={14} /> {blog.readingTime}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <Link href={`/blog/${blog.id}`}>
                    <h2 className="text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                        {blog.title}
                    </h2>
                </Link>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-3">
                    {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                    {blog.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-3">
                    <Image
                        src={blog.author.profileImage}
                        alt={blog.author.name}
                        width={36}
                        height={36}
                        className="rounded-full border"
                    />
                    <div>
                        <p className="text-sm font-medium">{blog.author.name}</p>
                        <p className="text-xs text-muted-foreground">{blog.author.role}</p>
                    </div>
                </div>

                {/* Read More button */}
                <div className="mt-4">
                    <Link href={`/blog/${blog.id}`}>
                        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-black-300 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300  hover:scale-[1.05] cursor-pointer hover:bg-black-200">
                            Read More
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
