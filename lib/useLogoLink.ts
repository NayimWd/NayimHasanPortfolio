import { usePathname } from "next/navigation";

export const useLogoLink = () => {
  const pathname = usePathname();

  // if we are already on home page, scroll to top (anchor)
  if (pathname === "/") return "/#home"; 

  return "/";
};