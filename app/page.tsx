import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Grid from "@/components/ui/grid/Grid";
import NavMenu from "@/components/ui/NavMenu";

export const dynamic = "force-static";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
         <NavMenu/>
          <Hero/>
          <Grid/>
          <Projects/>
          <Experiences/>
          <Skills/>
          <BlogSection/>
          <Contact/>
      </div>
    </main>
  );
}
