import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "Omi Portfolio",
    desc: "Full stack first old version of my personal portfolio with MongoDB backend, contact form, live likes system and deployed on Vercel.The new current version is built on React",
    tech: ["hmtl", "Css", "Node.js", "MongoDB"],
    live: "https://omi-portfolio-lake.vercel.app/",
    code: "https://github.com/Omi-nox/Web_dev_excercise/tree/main/P1_html_css/L1-basics/mini_project1",
    color: "from-[#6366f1] to-[#06b6d4]",
    image: "/l8.jpg"   // 👈 YEH DEKHO! I4.png (capital I)
  },
  {
    title: "Expense Tracker App",
    desc: "Real-time A GUI APP that tracks expenses and provides insights into spending patterns and giving good visualizations.",
    tech: ["Python", "tkinter lib"],
    live: "#",
    code: "https://github.com/Omi-nox/My_PY_Projects/tree/main/Gui_Projects/Project8_tkinter",
    color: "from-[#06b6d4] to-[#6366f1]",
    image: "/l10.png"
  },
  {
    title: "Quiz Exercise",
    desc: "Quiz exercise with some questions like a test. Fully UI and Responsive.",
    tech: ["HTML", "CSS", "Full JavaScript"],
    live: "https://web-dev-excercise.vercel.app/index.html",
    code: "https://github.com/Omi-nox/Web_dev_excercise/tree/main/P1_html_css/L1-basics/mini_project2",
    color: "from-[#6366f1] to-[#a855f7]",
    image: "/l12.png"   // 👈 I11.png
  },
  {
    title: "ML Rep Counter",
    desc: "Machine learning model workout Rep Counter  that detect body by 'pose_world_landmarks' .",
    tech: ["Python", "OpenCV", "MediaPipe"],
    live: "#",
    code: "https://github.com/Omi-nox/My_PY_Projects/tree/main/Intermediate_Advance/Object_detection_CV_projects/Project15_Rep_Counter",
    color: "from-[#a855f7] to-[#06b6d4]",
    image: "/f1.png"   // 👈 I12.png
  },
]

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full flex flex-col gap-15">

        {/* Header */}
        <div className="text-center">
          <p className="text-[#06b6d4] text-sm tracking-widest uppercase mb-2">What I Built</p>
          <h2 className="text-4xl font-bold text-[#f1f5f9]">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">Projects</span>
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          {projects.map((project) => (
            <div key={project.title} className="bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden hover:border-[#6366f1] transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/10 group">

              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>

              {/* 🖼️ Image Section - Responsive + Fallback */}
              <div className="w-full overflow-hidden bg-[#1f2937] h-48 md:h-56 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {/* Fallback - behind image */}
                <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${project.color} text-white font-bold text-xl z-0`}>
                  {project.title}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-[#f1f5f9] font-bold text-xl">{project.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{project.desc}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-[#1f2937] text-[#06b6d4] text-xs px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-2">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm text-[#6366f1] hover:text-[#06b6d4] transition-colors flex items-center gap-1">
                    {/* Live Demo Icon */}
                    <FaExternalLinkAlt className="text-xs transition-transform group-hover:-translate-y-0.5" />
                    Live Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-sm text-[#6366f1] hover:text-[#06b6d4] transition-colors flex items-center gap-1">
                    {/* GitHub Icon */}
                    <FaGithub className="text-base transition-all group-hover:scale-110" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects;