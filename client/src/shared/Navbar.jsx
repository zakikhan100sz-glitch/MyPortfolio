import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Services", href: "/#services" },
  { label: "Education", href: "/#education" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact", href: "/#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // On mobile, hide navbar; show only on scroll
  const showNavbar = !isMobile || isScrolled;

  return (
    <motion.header 
      className="fixed inset-x-0 top-0 z-50 bg-[#071b2b]/95 backdrop-blur-md"
      initial={isMobile ? { y: -100 } : { y: 0 }}
      animate={showNavbar ? { y: 0 } : { y: -100 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/#home" className="text-3xl font-extrabold tracking-tight text-white">ZaSa<span className="text-cyan-400">|Tech</span></a>
        <nav className="hidden items-center gap-10 lg:flex">{links.map((l,i)=><a key={l.label} href={l.href} className={`text-lg font-semibold transition-smooth duration-300 hover:text-cyan-400 ${i===0?"text-cyan-400 underline underline-offset-8":"text-white"}`}>{l.label}</a>)}</nav>
 
        <button className="text-white lg:hidden" onClick={()=>setOpen(!open)}>{open?<X size={28}/>:<Menu size={28}/>}</button>
      </div>
      {open && <div className="border-t border-white/10 bg-[#071b2b] lg:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5">{links.map(l=><a key={l.label} href={l.href} className="text-base font-medium text-white transition hover:text-cyan-400" onClick={()=>setOpen(false)}>{l.label}</a>)}</div></div>}
    </motion.header>
  );
}
