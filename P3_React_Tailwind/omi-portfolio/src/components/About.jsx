function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 lg:gap-25">
        
        {/* ===== PHOTO ===== */}
        <div className="relative flex-shrink-0 w-44 h-44 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64">
          
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] animate-spin"
               style={{ padding: '3px', animation: 'spin 4s linear infinite' }}>
            <div className="w-full h-full rounded-full bg-[#0a0a0a]"></div>
          </div>
          
          {/* Photo */}
          <img
            src="/photo.jpg"
            alt="Umar Asghar"
            className="absolute inset-[4px] w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover z-10"
          />
          
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-[#6366f1]/20 blur-xl -z-10"></div>
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
            Python, Machine Learning, and Full Stack Web Development through pure consistency.I am Self-Learner.
          </p>
          
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
            I don't just learn technologies — I build real things with them. 
            From writing AI-Automation Scripts and deployed ML models to live full stack applications with real databases. 
            My goal is to become an AI Engineer who ships products, not just writes code.
          </p>

          {/* ===== STATS ===== */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start mt-2">
            {[
              { number: '10+', label: 'Projects Built' },
              { number: '3+', label: 'Live Deployments' },
              { number: '2+', label: 'Languages' },
              { number: '2+', label: 'Coding Experience' },
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