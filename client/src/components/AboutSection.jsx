import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FloatingCard, ScaleReveal } from "./MotionComponents";

export default function AboutSection() {
  return <section id="about" className="overflow-x-hidden bg-[#071b2b] px-4 py-14 text-white sm:px-6 md:py-24 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle title="About" accent="Me"/>
      <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
        <FloatingCard delay={0}>
          <div className="flex justify-center">
            <motion.div 
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="absolute inset-0 rounded-[25px] bg-cyan-500/20 blur-2xl sm:rounded-[30px]"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="hidden lg:block relative overflow-hidden rounded-[25px] border border-cyan-400/20 bg-[#0a2236] p-3 sm:rounded-[30px] sm:p-4">
                <motion.img 
                  loading="lazy" 
                  src="/public/about/photo5.png" 
                  alt="About" 
                  className="h-auto scale: 1.08 rounded-[25px] w-full max-h-[280px] object-cover sm:max-h-[350px] md:max-h-[420px] transition-smooth duration-500"
                  // whileHover={{  }}
                  // whileTap={{ scale: 0.98 }}
                />
              </div>
            </motion.div>
          </div>
        </FloatingCard>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.p 
            className="text-lg font-bold text-cyan-400 sm:text-xl md:text-2xl lg:text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Full-Stack Developer
          </motion.p>
          <motion.p 
            className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:mt-6 md:text-lg md:leading-9"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
             I am a passionate Full-Stack Developer who enjoys building innovative, user-friendly web applications. I like turning ideas into concrete, visually beautiful, and technically sound digital goods.

            I use both front-end and back-end technologies to develop complete web solutions from design to deployment. My primary objectives are to write clean code, build scalable systems, and deliver flawless user experiences.

            I'm continuously learning new technologies and improving my abilities to stay up to date with modern development methods. My goal is to develop products that solve real problems and provide value to customers, businesses, and consumers.
          </motion.p>
          <motion.p 
            className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:mt-6 md:text-lg md:leading-9"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
           
          </motion.p>
          <motion.div 
            className="mt-4 grid gap-3 sm:grid-cols-2 md:mt-8 md:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              { number: " 3+", label: "Years Experience" },
              { number: " 34+", label: "Projects Built" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="rounded-2xl border border-cyan-400/20 bg-[#0a2236] p-4 sm:p-5 md:p-6"
                whileHover={{ 
                  borderColor: "rgba(34, 211, 238, 0.5)",
                  backgroundColor: "rgba(34, 211, 238, 0.05)",
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.h3 
                  className="text-2xl font-extrabold text-cyan-400 sm:text-3xl"
                  whileInView={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="mt-1 text-sm text-slate-300 sm:mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.a 
            href="/#contact"
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 inline-block rounded-lg bg-cyan-500 px-6 py-3 text-base font-bold text-[#071b2b] transition md:mt-8 md:py-4 md:text-lg"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>;
}
