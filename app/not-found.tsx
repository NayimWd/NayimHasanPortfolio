import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 text-foreground px-4">
            <h1 className="text-6xl font-extrabold mb-4 text-primary">404</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 text-center max-w-md">
                Oops! The page you are looking for doesn’t exist or has been moved.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple/20 to-black-300 text-primary font-medium shadow-md hover:shadow-lg transition hover:opacity-90"
            >
                <ArrowLeft size={20} /> Go Back Home
            </Link>
        </div>
    )
}
