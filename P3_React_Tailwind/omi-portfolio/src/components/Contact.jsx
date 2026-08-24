import { useForm, ValidationError } from '@formspree/react'
import { HiOutlineMail } from 'react-icons/hi'; // Email Icon
import { FiMapPin } from 'react-icons/fi';      // Location Icon
import { MdOutlineWorkOutline } from 'react-icons/md'; // Internship/Status Icon
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BsCloudCheck } from 'react-icons/bs'

function Contact() {
  // Formspree setup bilkul sahi hai aapki ID ke sath
  const [state, handleSubmit] = useForm("xnjworbg")

  return (
    <section id="contact" className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full flex flex-col gap-12">

        {/* Header */}
        <div className="text-center">
          <p className="text-[#06b6d4] text-sm  tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-4xl font-bold text-[#f1f5f9]">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">Me</span>
          </h2>
          <p className="text-[#64748b] mt-4">Have a project in mind or want to say hello? Drop me a message and Let's build something amazing together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">

          {/* Left - Info */}
          <div className="flex flex-col gap-6">
            {[
              { icon: <HiOutlineMail className="text-[#6366f1] " />, label: 'Email', value: 'umarasghar508@gmail.com' },
              { icon: <FiMapPin className="text-[#06b6d4]" />, label: 'Location', value: 'Islamabad, Pakistan' },
              { icon: <MdOutlineWorkOutline className="text-[#8b5cf6]" />, label: 'Status', value: 'Open to Internships' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="text-2xl ">{item.icon}</span>
                <div>
                  <p className="text-[#64748b] text-xs md:text-sm font-bold uppercase tracking-wider">{item.label}</p>
                  <p className="text-[#f1f5f9] text-xs">{item.value}</p>
                </div>
              </div>
            ))}
            {/* Additional Info / Status indicator */}
            <div className="p-5 rounded-xl border border-dashed border-[#1e293b] flex items-center gap-3 text-xs text-[#64748b]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
              <span>Typically responds within 24 hours</span>
            </div>

          </div>

          {/* Right - Form (Uncommented and Integrated with Formspree) */}
          <div className="relative">
            {state.succeeded ? (
              <div className="bg-[#111827] border border-[#1f2937] p-8 rounded-lg text-center flex flex-col items-center justify-center min-h-[300px]">
                {/* Green Glowing Premium Icon */}
                <div className="w-16 h-16 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center mb-4 shadow-lg shadow-[#10b981]/10">
                  <BsCloudCheck className="w-8 h-8 text-[#10b981] animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-[#64748b] text-sm mt-2">Thank you,Your message has been routed directly to my inbox</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-[#111827] border border-[#1f2937] text-[#f1f5f9] px-4 py-3 rounded-lg focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-[#374151]"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-[#111827] border border-[#1f2937] text-[#f1f5f9] px-4 py-3 rounded-lg focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-[#374151]"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full bg-[#111827] border border-[#1f2937] text-[#f1f5f9] px-4 py-3 rounded-lg focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-[#374151] resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-[#6366f1] text-white py-3 rounded-lg font-medium hover:bg-[#4f46e5] transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/25 disabled:opacity-50"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
