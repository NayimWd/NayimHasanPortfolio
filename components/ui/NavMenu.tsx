"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/Navbar";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";


export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Sticky effect
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative -top-10">
    <Navbar
      className={cn(
        "transition-all duration-300",
        (isSticky || isOpen)
          ? "fixed top-0 left-0 w-full bg-black-100 shadow-lg z-50"
          : "relative bg-transparent"
      )}
    >
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton href="#pricing" variant="primary">
          Get Started
        </NavbarButton>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div ref={menuRef} className="flex flex-col space-y-4 p-4 bg-black-100">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)} // close menu when clicking link
              >
                {item.name}
              </a>
            ))}

            <NavbarButton
              href="#pricing"
              variant="primary"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
    </div>
  );
}
