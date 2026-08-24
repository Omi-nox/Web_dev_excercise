import LikeButton from "./like"
import { useState, useEffect } from "react";
import AIThreadsBackground from "./AIThreadsBackground";

function Hero() {
  const words = ["Problem Solver", "Python Expert", "Self Learner", "Student"];
  const [wordIndex, setIndex] = useState(0);
  const [charIndex, setChar] = useState(0);
  const [isdelt, setdelete] = useState(false);
  const [display, setdisplay] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timer = setTimeout(() => {
      if (!isdelt) {
        // TYPING MODE
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
          setChar(charIndex - 1);
        } else {
          // Delete complete – next word par jao
          setdelete(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isdelt ? 100 : 200);

    return () => clearTimeout(timer);
  }, [charIndex, isdelt, wordIndex]);

  return (
    <section id="home" className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Dynamic Interactive AI Threads Animation Canvas */}
      <AIThreadsBackground />

      <div className="relative z-10 max-w-4xl w-full flex flex-col justify-center items-center text-center gap-6 mt-2 sm:mb-4 mb-8">
        {/* Greeting */}
        <p className="text-[#06b6d4] text-sm tracking-widest uppercase mt-1 font-semibold drop-shadow">Welcome to my portfolio</p>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f1f5f9] drop-shadow-md">
          M.Umar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#06b6d4]">Asghar</span>
        </h1>

        {/* TYPEWRITER */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f1f5f9] flex flex-wrap justify-center items-center gap-2">
          <span>I'm a</span>
          <span className="text-[#6366f1] min-w-[120px] sm:min-w-[160px] inline-block text-left">
            {display}
            <span className="animate-pulse text-[#06b6d4] ml-1">|</span>
          </span>
        </div>

        {/* Role */}
        <p className="text-xl text-[#cbd5e1] font-medium drop-shadow-sm">
          Future AI Engineer & MERN Stack Dev
        </p>

        {/* Bio */}
        <p className="text-[#94a3b8] max-w-2xl text-base leading-relaxed">
          Building intelligent web applications and AI products that solve real problems.
          From AI Machine learning models to full stack deployments.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2 max-w-lg items-center justify-center w-full">
          <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] w-full max-w-[200px] text-sm sm:text-lg text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#6366f1]/30 hover:scale-105">
            View Projects
          </a>
          <a href="/my-cv.pdf" download="Umar_Asghar_cv.pdf" className="px-6 py-3 w-full max-w-[200px] text-sm sm:text-lg border border-[#6366f1] text-[#6366f1] bg-[#6366f1]/5 rounded-lg font-medium hover:bg-[#6366f1]/20 transition-all duration-300 hover:scale-105">
            Download CV
          </a>
        </div>
        <div className="flex justify-center h-[80px]">
          <LikeButton />
        </div>
      </div>
    </section>
  );
}

export default Hero;