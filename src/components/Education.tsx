import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, SchoolIcon, School2Icon } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const education = [
    {
      Icon: GraduationCap,
      title: "Nalla Malla Reddy Engineering College",
      role: "Electronics & Communication Engineering",
      period: "2014 - 2018",
      type: "B.Tech"
    },
    {
      Icon: School2Icon,
      title: "Sri Chaitanya Jr. Kalasala",
      role: "MPC",
      period: "2012 - 2014",
      type: "Intermediate"
    },
    {
      Icon: SchoolIcon,
      title: "Narayana E-Techno School",
      role: "10th class",
      period: "Up to 2012",
      type: "SSC"
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5A189A] via-[#9D4EDD] to-[#E0AAFF]">
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="grid gap-6">
  {education.map(({ Icon, title, role, period, type }, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-8"
      >
        <div className="group bg-glass/30 p-4 rounded-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_4px_rgba(157,77,221,0.3)]">
          <div className="flex justify-between items-start gap-4">
            
            {/* Left: Icon and content */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/10 p-2 rounded-full">
                <Icon className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-[#d1b3ff]/20 via-[#b38dff]/20 to-[#a678f5]/20 text-[#b38dff]">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                </div>
                <h4 className="text-lg text-gray-300">{role}</h4>
              </div>
            </div>

            {/* Right: Period */}
            <div className="text-sm text-gray-400 min-w-[100px] text-right mt-1">
              {period}
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Education; 