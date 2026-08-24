import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-80, 80], [12, -12]), { stiffness: 250, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-12, 12]), { stiffness: 250, damping: 20 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="about" className="min-h-screen bg-[#0a0a0a]/90 relative z-10 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 lg:gap-25 z-10">
        
        {/* ===== PHOTO: INTERACTIVE STICKY WAVY DRAGGABLE 3D CARD ===== */}
        <div className="relative flex-shrink-0 flex flex-col items-center group cursor-grab active:cursor-grabbing">
          <motion.div
            drag
            dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
            dragElastic={0.25}
            dragSnapToOrigin={true}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative w-44 h-44 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 p-1 rounded-full bg-gradient-to-r from-[#6366f1] via-[#06b6d4] to-[#6366f1] shadow-2xl shadow-[#6366f1]/30"
          >
            {/* Spinning liquid wavy aura */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] animate-spin opacity-80 blur-sm group-hover:opacity-100 transition-opacity"
              style={{ animationDuration: '4s' }}
            />
            
            {/* Inner Photo */}
            <div className="relative w-full h-full rounded-full bg-[#0a0a0a] overflow-hidden p-1">
              <img
                src="/photo.jpg"
                alt="Umar Asghar"
                className="w-full h-full rounded-full object-cover pointer-events-none transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[#6366f1]/20 blur-xl -z-10" />

            {/* Drag tooltip */}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#111827] border border-[#6366f1]/50 text-[#06b6d4] text-[10px] sm:text-xs font-bold px-3 py-0.5 rounded-full shadow-lg whitespace-nowrap pointer-events-none z-20">
              Drag me! 
            </span>
          </motion.div>
        </div>

        {/* ===== TEXT ===== */}
        <div className="flex flex-col gap-3 sm:gap-4 text-center md:text-left max-w-3xl">
          
          <p className="text-[#06b6d4] text-xs sm:text-sm tracking-widest uppercase">
            About Me
          </p>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#f1f5f9] leading-tight">
            Passionate about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">
              building things
            </span>
          </h2>
          
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
            I'm Umar Asghar, an AI Engineering student at FUUAST, Islamabad. 
            Self-driven and hungry to build — I started from zero and taught myself 
            Python, Machine Learning, and MERN  Stack  Development through pure consistency. I am Self-Learner.
          </p>
          
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
            I don't just learn technologies — I build real things with them. 
            From writing AI-Automation Scripts and Building models to live full stack applications with real databases. 
            My goal is to become an AI Engineer who ships products, not just writes code.
          </p>

          {/* ===== STATS ===== */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start mt-2">
            {[
              { number: '10+', label: 'Projects Built' },
              { number: '3+', label: 'Live Deployments' },
              { number: '2+', label: 'Languages' },
              { number: '3+', label: 'Coding Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center md:items-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6366f1]">
                  {stat.number}
                </span>
                <span className="text-[#64748b] text-xs sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;