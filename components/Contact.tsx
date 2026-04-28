import { Copyright, Facebook, Linkedin, Send } from "lucide-react"
import MagicButton from "./ui/MagicButton"

const Contact = () => {
    return (
        <div id="contact" className="w-full paddingY relative overflow-y-hidden">
            <div className="w-full  absolute left-0 -bottom-20 py-20 min-h-96 ">
                <img src="/footer-grid.svg" alt="grid-bg"
                    className="w-full h-full opacity-60"
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">Ready to bring  to fresh ideas and<span className="text-purple"> modern solutions</span> your next project? </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center w-full md:w-[70%]">I'm passionate about creating exceptional web experiences using React, Next.js, and the MERN stack. Let's discuss how I can contribute to your team's success.</p>
                <a href="mailto:nayim.wd@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<Send size={20} />}
                        position="right"
                    />

                </a>
            </div>
            <div className="flex mt-16  justify-between items-center">
                <p className="flex items-center gap-2 text-sm sm:text-base font-light md:font-normal"> <Copyright size={16} /> 2026 Nayim Hasan </p>
                <div className="flex items-center z-10 gap-4">
                    <a target="_blank" href="https://github.com/NayimWd/NayimWd-Unity-Sports-Dashboard">
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/nayim-hasan/">
                        <img className="w-8 h-8 rounded-lg bg-slate-800 p-1 cursor-pointer" src="/github.svg" alt="github logo" loading="lazy" />
                    </a>

                    <img className="w-8 h-8 rounded-lg bg-slate-800 p-1.5 cursor-pointer" src="/link.svg" alt="github logo" loading="lazy" />
                    <Facebook size={32} className="cursor-pointer rounded-lg bg-slate-800 p-1.5 text-[#1877F2]" />
                </div>
            </div>

        </div>
    )
}

export default Contact