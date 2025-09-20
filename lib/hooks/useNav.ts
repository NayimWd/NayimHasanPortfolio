import { usePathname } from "next/navigation";
import { navConfig } from "../nav";

export const useNav = () => {
  const pathName = usePathname();

  // home page links for navigate to sections
  if (pathName === "/") {
    return navConfig.homeSections.map((item) => ({
      name: item.name,
      link: `/#${item.anchor}`,
    }));
  }

  // for blog page nav items
  if (pathName === "/blog" || pathName === "/projects") {
    return navConfig.blogsPage;
  }

  return navConfig.homeSections.map((item) => ({
    name: item.name,
    link: `/#${item.anchor}`,
  }));
};
