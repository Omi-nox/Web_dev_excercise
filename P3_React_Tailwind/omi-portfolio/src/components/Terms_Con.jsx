import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFileContract } from 'react-icons/fa';

function Terms() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#6366f1] transition-colors duration-300 mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center">
            <FaFileContract className="w-6 h-6 text-[#06b6d4]" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#f1f5f9]">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">Service</span>
            </h1>
            <p className="text-[#64748b] text-sm mt-1">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 md:p-10 space-y-8">
          
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#f1f5f9] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#6366f1] to-[#06b6d4] rounded-full"></span>
              Intellectual Property
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              All content, including project descriptions, code samples, visual elements, and design 
              is the intellectual property of <span className="text-[#f1f5f9]">Umar Asghar (Omi-Nox)</span>. 
              All rights reserved.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#f1f5f9] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#6366f1] to-[#06b6d4] rounded-full"></span>
              Use of Content
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              You may not reproduce, distribute, modify, display, perform, or commercially exploit 
              any content without prior written consent. Viewing the website for personal and 
              professional reference is encouraged and welcome.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#f1f5f9] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#6366f1] to-[#06b6d4] rounded-full"></span>
              Disclaimer & Liability
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              While I strive for accuracy and functionality, I provide no guarantees regarding the 
              availability, reliability, or accuracy of any projects or external links. Use of this 
              website is at your own risk.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#f1f5f9] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#6366f1] to-[#06b6d4] rounded-full"></span>
              External Links
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              This website may contain links to third-party websites (GitHub, LinkedIn, etc.). 
              I am not responsible for the content, privacy policies, or practices of these external sites.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#f1f5f9] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#6366f1] to-[#06b6d4] rounded-full"></span>
              Changes to Terms
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              I reserve the right to update these terms at any time. Continued use of the website 
              constitutes acceptance of the updated terms.
            </p>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-[#64748b] text-xs border-t border-[#1f2937] pt-6">
          &copy; {new Date().getFullYear()} Umar Asghar. All rights reserved.
        </div>

      </div>
    </section>
  );
}

export default Terms;