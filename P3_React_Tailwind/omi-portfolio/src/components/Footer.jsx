import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { FiMapPin } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import { IoCafeOutline, IoCafe } from 'react-icons/io5';
import { LuCoffee } from 'react-icons/lu';
import Privacy from './Privacy'
import Terms from './Terms_Con'
import { Link } from 'react-router-dom';

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Omi-Nox", label: "GitHub", color: "hover:text-[#f1f5f9]" },
  { icon: <FaInstagram />, href: "https://instagram.com/umarkhan_.ysfxi_", label: "Instagram", color: "hover:text-[#E4405F] " },
  { icon: <FaXTwitter />, href: "https://twitter.com/@Umari6x9", label: "Twitter", color: "hover:text-[#1DA1F2]" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/umar-asghar-000a253b2/?skipRedirect=true", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1f2937] relative overflow-hidden">
      
      {/* Background Glow - More dramatic */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#06b6d4]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        
        {/* Main Grid - 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1 - Brand + Description */}
          <div className="flex flex-col gap-4">
            <span className="text-2xl md:text-3xl font-bold text-[#6366f1] inline-block">
              Omi<span className="text-[#06b6d4]">-Nox</span>
            </span>
            <p className="text-[#64748b] text-sm  leading-relaxed max-w-xs">
              Crafting modern, responsive web experiences with React, Node.js, and cloud technologies. <br />Python tools
              for Automation Scripts.
            </p>
            <div className="flex items-center gap-3 text-[#64748b] text-sm mt-2">
              <FiMapPin className="text-[#6366f1] md:text-lg " />
              <span>Pakistan</span>
            </div>
            <div className="flex items-center gap-3 text-[#64748b] text-sm">
              <HiOutlineMail className="text-[#06b6d4] md:text-lg" />
              <a href="mailto:umar@example.com" className="hover:text-[#6366f1] transition-colors">
                umarasghar508@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#f1f5f9] font-bold text-sm uppercase tracking-wider ">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#64748b] text-sm hover:text-[#6366f1] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Social + CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#f1f5f9] font-bold text-sm uppercase tracking-wider">
              Connect With Me
            </h4>
            <p className="text-[#64748b] text-sm">
              Let's build something amazing together. Reach out anytime!
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full bg-[#111827] border border-[#1f2937] flex items-center justify-center text-[#64748b] ${social.color} transition-all duration-300 hover:scale-110 hover:border-[#6366f1] hover:shadow-lg hover:shadow-[#6366f1]/20 group`}
                  aria-label={social.label}
                >
                  <span className="text-lg group-hover:rotate-6 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider with gradient */}
        <div className="relative my-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748b] text-xs text-center md:text-sm">
            © {new Date().getFullYear()} Umar Asghar. All rights reserved.
          </p>
        {/*  Sirf Link components - Router App.jsx mein hai */}
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[#64748b] text-xs hover:text-[#6366f1] transition-colors cursor-pointer font-bold">
              Privacy Policy
            </Link>
            {/* <FaCoffee size={25} color="#6F4E37" />  */}
            
      
            <span className="w-px h-4 bg-[#1f2937]"></span>
            <LuCoffee size={25} color="#d4a373" /> 
            <Link to="/terms" className="text-[#64748b] text-xs hover:text-[#6366f1] transition-colors cursor-pointer font-bold">
              Terms of Service
            </Link>
          </div>
          
          <p className="text-[#64748b] text-xs flex items-center gap-1">
            Built with 
            
            <span className="text-red-500 animate-pulse ">
              <FaRegHeart size={25} color="red" />
              </span> using React &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;