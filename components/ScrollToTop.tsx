"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={cn(
                "fixed bottom-6 right-6 z-[250] flex items-center justify-center rounded-lg p-3",
                "bg-black-200 text-primary-foreground shadow-lg transition-all duration-300",
                "hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple/60",
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
        >
            <ChevronUp className="h-5 w-5 text-purple font-bold" />
        </button>
    );
};

export default ScrollToTop;
