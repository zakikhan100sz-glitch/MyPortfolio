import { Code2, Database, LayoutDashboard, Server } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FloatingCard, PulseGlow } from "./MotionComponents";

const skills = [
  { title: "Frontend", icon: Code2, items: ["React","Bootstrap","Tailwind CSS & Alpine.js","JavaScript","HTML5","CSS3","Figma UI/UX"] },
  { title: "Backend", icon: Server, items: ["Node.js","Express.js","Python","PHP","REST API","JWT","Validation","MVC"] },
  { title: "Database", icon: Database, items: ["MongoDB","Mongoose","Schema Design","PostgreSQL"] },
  { title: "Tools", icon: LayoutDashboard, items: ["Git","GitHub","Postman","Render","Vercel","Cloudinary","Netlify"] }
];

export default function SkillsSection() {
  return <section id="skills" className="overflow-x-hidden bg-[#0a2236] px-4 py-14 text-white sm:px-6 md:py-24 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle title="My" accent="Skills"/>
      <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 xl:gap-8 xl:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <FloatingCard key={skill.title} delay={index * 0.12}>
              <motion.div 
                className="rounded-[20px] border border-cyan-400/20 bg-[#071b2b] p-5 transition-smooth duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20 sm:rounded-[24px] sm:p-6 md:p-7 h-full"
                whileHover={{ borderColor: "rgba(34, 211, 238, 0.6)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div 
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500 text-[#071b2b] sm:h-13 sm:w-13 sm:rounded-xl md:h-14 md:w-14"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={24} className="sm:w-[26px] md:w-[28px]"/>
                </motion.div>
                <motion.h3 
                  className="mt-4 text-lg font-bold sm:mt-5 md:mt-6 md:text-xl lg:text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  {skill.title}
                </motion.h3>
                <motion.div 
                  className="mt-3 flex flex-wrap gap-2 sm:mt-4 md:mt-6 md:gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {skill.items.map((item, i) => (
                    <motion.span 
                      key={item} 
                      className="rounded-full border border-cyan-400/20 bg-[#0a2236] px-3 py-1 text-xs font-medium text-slate-200 sm:px-4 sm:py-2 sm:text-sm"
                      whileHover={{ 
                        borderColor: "rgba(34, 211, 238, 0.5)", 
                        backgroundColor: "rgba(34, 211, 238, 0.1)",
                        scale: 1.05
                      }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </FloatingCard>
          )
        })}
      </div>
    </div>
  </section>;
}
