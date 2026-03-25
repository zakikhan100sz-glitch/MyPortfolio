import { Briefcase, Globe, LayoutDashboard, Server } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FloatingCard } from "./MotionComponents";

const services = [
  { title: "Frontend Development", icon: Globe, description: "Creating modern, responsive, and visually engaging user interfaces using React, JavaScript, and Tailwind CSS." },
  { title: "Backend Development", icon: Server, description: "Building secure and scalable server-side applications and APIs with Node.js and Express." },
  { title: "Admin Dashboard Systems", icon: Briefcase, description: "Building powerful admin panels and dashboards for managing products, users, content, and analytics." },
  { title: "Full-Stack Web Applications", icon: Briefcase, description: "Developing complete end-to-end web applications with modern technologies and scalable architecture." }
];

export default function ServicesSection() {
  return <section id="services" className="overflow-x-hidden bg-[#071b2b] px-4 py-14 text-white sm:px-6 md:py-24 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle title="My" accent="Services"/>
      <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 xl:gap-8 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <FloatingCard key={service.title} delay={index * 0.12}>
              <motion.div 
                className="rounded-[20px] border border-cyan-400/20 bg-[#0a2236] p-5 text-center transition-smooth duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20 sm:rounded-[24px] sm:p-6 md:p-7 lg:p-8 h-full flex flex-col"
                whileHover={{ borderColor: "rgba(34, 211, 238, 0.6)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div 
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-cyan-500 text-[#071b2b] sm:h-15 sm:w-15 sm:rounded-xl md:h-16 md:w-16 md:rounded-2xl"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={24} className="sm:w-[26px] md:w-[30px]"/>
                </motion.div>
                <motion.h3 
                  className="mt-4 text-lg font-bold sm:mt-5 md:mt-6 md:text-xl lg:text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="mt-3 text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7 md:mt-4 md:text-base md:leading-8 flex-grow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.15 }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            </FloatingCard>
          )
        })}
      </div>
    </div>
  </section>;
}
