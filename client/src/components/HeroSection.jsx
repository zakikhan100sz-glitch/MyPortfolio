import { Facebook, Instagram, Linkedin, Youtube, Github } from "lucide-react";
import useTypewriter from "../hooks/useTypewriter";
import { motion } from "framer-motion";
import { FloatingCard, PulseGlow, BounceIn, HoverScale } from "./MotionComponents";

const socials = [
//   { Icon: Facebook, href: "https://www.facebook.com/zaki.sadaqatzada" },
  // { Icon: Youtube, href: "https://www.youtube.com/@Scorching_Design" },
  { Icon: Instagram, href: "https://www.instagram.com/zuck369/" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/zaki-sadaqatzada-96746033a/" },
  { Icon: Github, href: "https://github.com/zuck369" }
];
const titles = ["Full-Stack Developer", "Freelancer", "n Online Tutor"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

export default function HeroSection() {
  const displayedText = useTypewriter(titles, 80, 1500);
  return <section id="home" className="relative overflow-hidden overflow-x-hidden bg-[#071b2b] px-4 py-14 text-white sm:px-6 md:py-24 lg:px-8 lg:pb-20 lg:pt-36">
    <div className="mx-auto grid max-w-7xl gap-6 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
      <motion.div 
        className="order-1 lg:order-2 relative flex w-full justify-center lg:justify-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl sm:h-[200px] sm:w-[200px] md:h-[260px] md:w-[260px] lg:h-[340px] lg:w-[340px]"
        />
        <div className="relative flex h-[180px] w-[180px] items-center justify-center sm:h-[260px] sm:w-[260px] md:h-[340px] md:w-[340px] lg:h-[420px] lg:w-[420px]">
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute h-[120px] w-[120px] rounded-full bg-cyan-400 sm:h-[180px] sm:w-[180px] md:h-[240px] md:w-[240px] lg:h-[300px] lg:w-[300px]"
          />
          <div className="absolute h-[130px] w-[130px] rounded-[48%_52%_58%_42%/41%_42%_58%_59%] border-8 border-t border-white/90 sm:h-[190px] sm:w-[190px] md:h-[250px] md:w-[250px] lg:h-[320px] lg:w-[320px] translate-y-4" />
          <div className="absolute h-[130px] w-[130px] rounded-[48%_52%_58%_42%/41%_42%_58%_59%] border-8 border-t border-white/90 sm:h-[190px] sm:w-[190px] md:h-[250px] md:w-[250px] lg:h-[320px] lg:w-[320px] translate-y-2" />
          <div className="hidden md:block absolute h-[130px] w-[130px] rounded-[48%_52%_58%_42%/41%_42%_58%_59%] border-8 border-t border-white/90 sm:h-[190px] sm:w-[190px] md:h-[250px] md:w-[250px] lg:h-[320px] lg:w-[320px]" />
          <div className="absolute h-[110px] w-[110px] rounded-[46%_54%_55%_45%/45%_41%_59%_55%] bg-cyan-500/30 sm:h-[160px] sm:w-[160px] md:h-[220px] md:w-[220px] lg:h-[280px] lg:w-[280px]" />
          <motion.img 
            loading="lazy" 
            src="/profile/photo.png" 
            alt="Profile" 
            className="relative md:-translate-x-5 h-full w-full min-h-full min-w-full rounded-full object-cover scale-110 -translate-x-3 -translate-y-1 transition-transform duration-500 cursor-grab active:cursor-grabbing"
            drag
            dragElastic={0.1}
          />
         
        </div>
        
      </motion.div>
      <motion.div 
        className="order-2 lg:order-1 w-full max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          variants={itemVariants}
          className="text-xl font-semibold text-white/90 sm:text-2xl md:text-3xl lg:text-4xl"
        >
          Hello, I'm
        </motion.p>
        <motion.h1 
          variants={itemVariants}
          className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:mt-4 lg:text-7xl font-playfair"
        >
          Zaki<span className="text-cyan-400">|Sadaqatzada</span>
        </motion.h1>
        <motion.h2 
          variants={itemVariants}
          className="mt-2 text-xl font-bold sm:text-2xl md:text-3xl lg:mt-4 lg:text-5xl font-playfair"
        >
          I'm a <span className="text-cyan-400 font-mono">{displayedText}<motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >|</motion.span></span>
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="mt-4 max-w-xl text-sm leading-8 text-slate-300 sm:text-base md:text-lg lg:mt-8 lg:text-xl lg:leading-9"
        >
          I build modern, scalable, and visually impressive web applications with clean frontend experiences and production-ready backend architecture.
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="mt-4 flex flex-wrap gap-3 sm:gap-4 lg:mt-8"
        >
          {socials.map(({ Icon, href }, i) => (
            <HoverScale key={i} scale={1.15}>
              <motion.a 
                href={href} 
                target="_blank" rel="noopener noreferrer"
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-500 text-[#071b2b] shadow-lg shadow-cyan-500/30 sm:h-12 sm:w-12"
              >
                <Icon size={20} className="sm:w-[22px]" />
              </motion.a>
            </HoverScale>
          ))}
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="mt-4 flex flex-wrap gap-3 sm:gap-5 lg:mt-8"
        >
          <motion.a 
            href="/#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-cyan-500 px-6 py-2 text-base font-bold text-[#071b2b] shadow-[0_0_30px_rgba(34,211,238,0.25)] sm:px-8 sm:py-3 md:text-lg lg:px-10 lg:py-4 lg:text-xl"
          >
            Hire Me
          </motion.a>
          <motion.a 
            href="/#contact"
            whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 1)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg border-2 border-cyan-500 px-6 py-2 text-base font-bold text-cyan-400 hover:bg-cyan-500 hover:text-[#071b2b] sm:px-8 sm:py-3 md:text-lg lg:px-10 lg:py-4 lg:text-xl"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>;
}
