"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, ArrowLeft } from "lucide-react"

interface ErrorProps {
    error: Error
    reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 text-foreground px-4">
            <AlertCircle size={60} className="text-destructive mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-destructive">Something went wrong</h1>
            <p className="text-muted-foreground mb-6 text-center max-w-md">
                An unexpected error has occurred. Please try again or go back to the homepage.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 rounded-lg bg-primary/20 text-primary font-medium hover:opacity-90 transition"
                >
                    Try Again
                </button>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple/20 to-black-300 text-primary font-medium shadow-md hover:shadow-lg transition hover:opacity-90"
                >
                    <ArrowLeft size={20} /> Go Home
                </Link>
            </div>
        </div>
    )
}
