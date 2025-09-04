"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        id: number;
        img: string;
        name?: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] bg-black-100",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-marquee",
                    pauseOnHover && "hover:[animation-play-state:paused]",
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="relative w-[200px] max-w-full shrink-0 rounded-2xl overflow-hidden group"
                    >
                        {/* Moving border effect wrapper */}
                        <div className="relative p-[1px] rounded-2xl bg-transparent">
                            <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/[0.8] backdrop-blur-xl px-6 py-6 shadow-md group-hover:shadow-lg transition hover:scale-[1.03]">

                                {/* Logo wrapper */}
                                <div className="relative h-20 w-20 flex items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-inner group-hover:bg-primary/20 transition">
                                    <Image
                                        src={item.img}
                                        alt={item.name || "logo"}
                                        className="h-12 w-12 object-contain"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Tool name */}
                                {item.name && (
                                    <p className="text-white/90 text-sm font-semibold tracking-wide group-hover:text-primary transition">
                                        {item.name}
                                    </p>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
