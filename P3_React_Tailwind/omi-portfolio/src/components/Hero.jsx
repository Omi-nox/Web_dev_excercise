import LikeButton from "./like"
import { useState,useEffect } from "react";
function Hero() {
   const words = ["Problem Solver","Python Expert","Self Learner","Student"];
  const [wordIndex, setIndex] = useState(0);
  const [charIndex, setChar] = useState(0);
  const [isdelt, setdelete] = useState(false);
  const [display, setdisplay] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timer = setTimeout(() => {
      if (!isdelt) {
        //  TYPING MODE
        if (charIndex < currentWord.length) {
          setdisplay(currentWord.slice(0, charIndex + 1));
          setChar(charIndex + 1);
        } else {
          setdelete(true); // Word complete, delete shuru
        }
      } else {
        // DELETING MODE
        if (charIndex > 0) {
          setdisplay(currentWord.slice(0, charIndex - 1));
          setChar(charIndex - 1); // ✅ FIX: charIndex ko ghatao
        } else {
          // ✅ Delete complete – next word par jao
          setdelete(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isdelt ? 100 : 200);

    return () => clearTimeout(timer);
  }, [charIndex, isdelt, wordIndex]);
  return (
    <section id="home" className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-4xl w-full flex flex-col justify-center items-center text-center gap-6 mt-2">
      {/* Greeting  */}
      <p className="text-[#06b6d4] text-sm tracking-widest uppercase mt-1">Welcome to my portfolio</p>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f1f5f9]">
          M.Umar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">Asghar</span>
        </h1>
         {/* <✅ TYPEWRITER – Responsive aur Cool */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f1f5f9] flex flex-wrap justify-center items-center gap-2">
          <span>I'm a</span>
          <span className="text-[#6366f1] min-w-[120px] sm:min-w-[160px] inline-block text-left">
            {display}
            <span className="animate-pulse text-[#06b6d4] ml-1">|</span>
          </span>
        </div>

        {/* Role */}
        <p className="text-xl  text-[#94a3b8]">
          Fututre AI Engineer & Full Stack Developer
        </p>

        {/* Bio */}
        <p className="text-[#64748b] max-w-2xl text-base leading-relaxed">
          Building intelligent web applications that solve real problems. 
          From AI Machine learning models to full stack deployments.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 max-w-lg  items-center justify-center w-full">
          <a href="#projects" className="px-6 py-3 bg-[#6366f1] w-full max-w-[200px] text-sm sm:text-lg  text-white rounded-lg font-medium hover:bg-[#4f46e5] transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/25">
            View Project
          </a>
          <a href="/my-cv.pdf" download="Umar_Asghar_cv.pdf" className="px-6 py-3 w-full max-w-[200px] text-sm sm:text-lg border border-[#6366f1] text-[#6366f1] rounded-lg font-medium hover:bg-[#6366f1]/10 transition-all duration-300">
         Download CV
          </a>
        </div>
         <div className="mt-1 flex justify-center">
        <LikeButton />
      </div>
      </div>
    </section>

  )
}
export default Hero