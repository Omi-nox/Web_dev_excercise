import { Link } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';

function Privacy() {
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
          <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center">
            <FaShieldAlt className="w-6 h-6 text-[#6366f1]" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#f1f5f9]">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">Policy</span>
            </h1>
            <p className="text-[#64748b] text-sm mt-1">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 md:p-10 space-y-8">
          
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#f1f5f9] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#6366f1] to-[#06b6d4] rounded-full"></span>
              Information We Collect
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              This portfolio website is built for demonstration and professional showcase purposes only. 
              I do not collect, store, or share any personal data unless explicitly provided via the contact form.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#f1f5f9] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#6366f1] to-[#06b6d4] rounded-full"></span>
              How We Use Your Information
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              Any information submitted through the contact form is used solely to respond to your inquiries 
              and is not shared with third parties. Your data is never sold, rented, or distributed.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#f1f5f9] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#6366f1] to-[#06b6d4] rounded-full"></span>
              Third-Party Links
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              This website may contain links to external sites (GitHub, LinkedIn, etc.). I am not responsible 
              for the privacy practices or content of these external websites.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#f1f5f9] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#6366f1] to-[#06b6d4] rounded-full"></span>
              Contact Me
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              If you have any questions about this privacy policy, feel free to reach out via the 
              <Link to="/#contact" className="text-[#6366f1] hover:text-[#06b6d4] transition-colors ml-1">
                contact form
              </Link>
              on my website.
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

export default Privacy;