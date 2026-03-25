import { motion } from "framer-motion";
import { GraduationCap, School, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { FloatingCard } from "./MotionComponents";

const education = [
  {
    school: "Astana IT University",
    degree: "Bachelor of Computer Science",
    year: "2024 - 2027",
    description: "Focused on software development, algorithms, and web technologies. Graduated with honors and gained practical experience through various projects.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    school: "Kabul University",
    degree: "Bachelor of Computer Science",
    year: "2020 - 2024",
    description: "Completed higher education with emphasis on mathematics and computer science, laying the foundation for my technical career.",
    icon: School,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10"
  },
  {
    school: "Marefat High School",
    degree: "High School Diploma",
    year: "2008 - 2020",
    description: "Completed secondary education with concentration on mathematics, physics, and computer science, fostering my early interest in technology and programming.",
    icon: Award,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
  }
];

const certificates = [
  {
    title: "IT Essential LINUX Certification",
    issuer: "Cisco Networking Academy & Astana IT University",
    year: "2026",
    description: "Certified in Linux operating system fundamentals, including command-line proficiency, system administration, and security best practices, with a focus on practical applications in IT environments.",
    image: "/certificates/linuxessential.png",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
    credentialId: "SKILLBADGE-2024"
  },
  {
    title: "search & AI(CRA Training Program)",
    issuer: "Huawei Cloud",
    year: "2025",
    description: "Completed intensive training in search technologies and artificial intelligence applications, gaining hands-on experience with Huawei Cloud's AI services and tools.",
    image: "/certificates/Huawei.png",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
    credentialId: "ICTRA20250417018677"
  },
   {
    title: "Volunteer Recognition Certificate",
    issuer: "AI & Digital Ministry",
    year: "2025",
    description: "Awarded for outstanding volunteer contributions to the AI & Digital Ministry, demonstrating commitment to advancing technology and community service.",
    image: "/certificates/digitalBridge.png",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
    credentialId: "DIGITAL-Astana2025"
  },
  {
    title: "Python Essential Certification",
    issuer: "Cisco Networking Academy",
    year: "2024",
    description: "Certified in Python programming fundamentals, including syntax, data structures, and basic algorithms, with applications in networking and automation.",
    image: "/certificates/python.png",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
    credentialId: "CISCO-PYTHON-2024"
  },
  {
    title: "Full Stack Web Development Certification",
    issuer: "SimpleLearn|SkillUp",
    year: "2024",
    description: "Completed comprehensive training in front-end and back-end web development technologies, including React, Node.js, and database management.",
    image: "/certificates/webdevelopment.png",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
    credentialId: "6271163"
  }
];

export default function EducationSection() {
  return <section id="education" className="overflow-x-hidden bg-[#0a2236] px-4 py-14 text-white sm:px-6 md:py-24 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <SectionTitle title="My" accent="Education"/>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 hidden md:block"></div>

        <div className="space-y-8 md:space-y-12">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex items-center gap-6 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#071b2b] border-4 border-cyan-400 shadow-lg shadow-cyan-400/30 hidden md:flex"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={24} className={`text-${edu.color.split(' ')[1]}`} />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-cyan-400"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Education card */}
                <FloatingCard delay={index * 0.1} className="flex-1">
                  <motion.div
                    className={`relative overflow-hidden rounded-[24px] border border-cyan-400/20 ${edu.bgColor} p-6 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-400/20 md:p-8`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(34, 211, 238, 0.15)"
                    }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0`}
                      whileHover={{ opacity: 0.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Sparkle effects */}
                    <motion.div
                      className="absolute top-4 right-4 text-cyan-400"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ✦
                    </motion.div>

                    <div className="relative z-10">
                      {/* Mobile icon */}
                      <motion.div
                        className="flex items-center gap-3 mb-4 md:hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.1 }}
                      >
                        <motion.div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${edu.color} text-white shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon size={20} />
                        </motion.div>
                        <div>
                          <motion.p
                            className="text-sm font-bold text-cyan-400"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.2 }}
                          >
                            {edu.year}
                          </motion.p>
                        </div>
                      </motion.div>

                      {/* Desktop year badge */}
                      <motion.div
                        className="hidden md:block absolute -top-3 -right-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2 text-sm font-bold text-white shadow-lg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                      >
                        {edu.year}
                      </motion.div>

                      <motion.h3
                        className="text-xl font-bold text-white md:text-2xl lg:text-3xl mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.1 }}
                      >
                        {edu.degree}
                      </motion.h3>

                      <motion.p
                        className="text-lg font-medium text-cyan-300 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                      >
                        {edu.school}
                      </motion.p>

                      <motion.p
                        className="text-sm leading-relaxed text-slate-300 md:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {edu.description}
                      </motion.p>

                      {/* Progress bar */}
                      <motion.div
                        className="mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                      >
                        <div className="flex justify-between text-xs text-slate-400 mb-2">
                          <span>Completion</span>
                          <span>100%</span>
                        </div>
                        <motion.div
                          className="h-2 bg-slate-700 rounded-full overflow-hidden"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                        >
                          <motion.div
                            className={`h-full bg-gradient-to-r ${edu.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ delay: index * 0.2 + 0.6, duration: 1.2 }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </FloatingCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>;
}

function CertificatesSection() {
  return (
    <section id="certificates" className="overflow-x-hidden bg-[#071b2b] px-4 py-14 text-white sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="My" accent="Certificates" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {certificates.map((cert, index) => {

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <FloatingCard delay={index * 0.1}>
                  <motion.div
                    className={`relative overflow-hidden rounded-[24px] border border-cyan-400/20 ${cert.bgColor} p-8 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-400/20 min-h-[380px] md:min-h-[420px]`}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 25px 50px rgba(34, 211, 238, 0.2)"
                    }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0`}
                      whileHover={{ opacity: 0.08 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Certificate image - larger and more prominent */}
                    <motion.div
                      className="flex flex-col items-center mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.1 }}
                    >
                      <motion.div
                        className="relative h-32 w-48 md:h-40 md:w-64 rounded-xl overflow-hidden shadow-xl border-4 border-cyan-400/40 mb-4"
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={cert.image}
                          alt={`${cert.title} certificate`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/certificates/placeholder.svg';
                          }}
                        />
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0`}
                          whileHover={{ opacity: 0.15 }}
                          transition={{ duration: 0.3 }}
                        />
                        {/* Verification badge */}
                        <motion.div
                          className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                        >
                          ✓
                        </motion.div>
                      </motion.div>

                      {/* Year badge */}
                      <motion.div
                        className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.2 }}
                      >
                        {cert.year}
                      </motion.div>
                    </motion.div>

                    <div className="relative z-10">
                      <motion.h3
                        className="text-lg font-bold text-white mb-2 md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.1 }}
                      >
                        {cert.title}
                      </motion.h3>

                      <motion.p
                        className="text-base font-medium text-cyan-300 mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.2 }}
                      >
                        {cert.issuer}
                      </motion.p>

                      <motion.p
                        className="text-sm leading-relaxed text-slate-300 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                      >
                        {cert.description}
                      </motion.p>

                      {/* Credential ID and verification */}
                      <motion.div
                        className="flex items-center justify-between pt-4 border-t border-slate-600/50"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                      >
                        <div className="text-xs text-slate-400">
                          <span className="text-cyan-400 font-mono">ID: {cert.credentialId}</span>
                        </div>
                        <motion.div
                          className="flex items-center gap-2 text-green-400 text-xs font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          Verified
                        </motion.div>
                      </motion.div>

                      {/* Achievement badge */}
                      <motion.div
                        className="absolute top-4 right-4"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.15 + 0.5, type: "spring", stiffness: 200 }}
                      >
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                          ✓
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </FloatingCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { EducationSection, CertificatesSection };
