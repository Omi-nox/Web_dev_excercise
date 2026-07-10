import { FaPython, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaStar, FaBrain, FaGlobe, FaTerminal } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiJavascript } from 'react-icons/si'

// 1. Services Data (Real Icons ke sath)
const services = [
  { 
    icon: <FaBrain className="text-4xl text-[#6366f1]" />, 
    title: "AI & Machine Learning", 
    desc: "Building ML models and AI-powered applications that solve real problems." 
  },
  { 
    icon: <FaGlobe className="text-4xl text-[#06b6d4]" />, 
    title: "Full Stack Web Dev", 
    desc: "From React frontends to Node.js backends with real databases." 
  },
  { 
    icon: <FaTerminal className="text-4xl text-green-400" />, 
    title: "Python Automation", 
    desc: "Scripts, data analysis, and automation tools using Python." 
  },
]

// 2. Skills Data (Rating Numbers ke sath)
const skills = [
  { icon: <FaReact className="text-cyan-400 text-3xl" />, name: "React", rating: 4 },
  { icon: <FaPython className="text-yellow-400 text-3xl" />, name: "Python", rating: 5 },
  { icon: <SiJavascript className="text-yellow-300 text-3xl" />, name: "JavaScript", rating: 4 },
  { icon: <FaNodeJs className="text-green-400 text-3xl" />, name: "Node.js", rating: 4 },
  { icon: <SiTailwindcss className="text-cyan-300 text-3xl" />, name: "Tailwind", rating: 5 },
  { icon: <SiMongodb className="text-green-500 text-3xl" />, name: "MongoDB", rating: 3 },
  { icon: <FaGitAlt className="text-orange-400 text-3xl" />, name: "Git", rating: 4 },
  { icon: <FaHtml5 className="text-orange-500 text-3xl" />, name: "HTML5", rating: 5 },
]

function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full flex flex-col gap-16">

        {/* Header */}
        <div className="text-center">
          <p className="text-[#06b6d4] text-sm sm:text-lg tracking-widest uppercase mb-2">What I Know</p>
          <h2 className="text-4xl font-bold text-[#f1f5f9]">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">Expertise</span>
          </h2>
        </div>

        {/* What I Do cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 flex flex-col gap-4 hover:border-[#6366f1] transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/10">
              {service.icon}
              <h3 className="text-[#f1f5f9] font-bold text-sm md:text-lg">{service.title}</h3>
              <p className="text-[#64748b] text-xs leading-relaxed md:text-md">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Skill badges with Star Ratings */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-[#111827] border border-[#1f2937] rounded-xl p-5 flex flex-col items-center gap-3 hover:border-[#6366f1] transition-all duration-300 hover:shadow-md hover:shadow-[#6366f1]/5">
               {skill.icon}
              <span className="text-[#f1f5f9] font-medium text-sm ">{skill.name}</span>
              
              {/* Stars Container */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`text-xs md:text-lg ${i < skill.rating ? 'text-yellow-400' : 'text-[#374151]'}`} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills