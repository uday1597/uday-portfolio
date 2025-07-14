import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  interface LogoProps {
    className?: string;
    style?: React.CSSProperties;
  }

  const ThoughtworksIcon: React.FC<LogoProps> = ({ className, style }) => (
    <img
      src="/tw.jpeg"
      alt="thoughtworks"
      className={`w-10 h-10 ${className}`}
      style={style}
    />
  );

  const AdpIcon: React.FC<LogoProps> = ({ className, style }) => (
    <img
      src="/adp.svg"
      alt="adp"
      className={`w-10 h-10 ${className}`}
      style={style}
    />
  );

  const EpamIcon: React.FC<LogoProps> = ({ className, style }) => (
    <img
      src="/epam.svg"
      alt="epam"
      className={`w-10 h-10 ${className}`}
      style={style}
    />
  );

  const MtIcon: React.FC<LogoProps> = ({ className, style }) => (
    <img
      src="/mindtree.jpeg"
      alt="mindtree"
      className={`w-10 h-10 ${className}`}
      style={style}
    />
  );

  const experiences = [
    {
      Icon: ThoughtworksIcon,
      title: "Thoughtworks",
      role: "Senior Developer Consultant",
      period: "May 2025 - Current",
      description:
        "Driving impactful digital transformation for global clients through custom software delivery, agile practices, and thought leadership.",
      type: ""
    },
    {
      Icon: EpamIcon,
      title: "EPAM",
      role: "Senior Software Engineer",
      period: "Dec 2024 - May 2024",
      description:
        "Created and edited video content for social media platforms, focusing on educational content and student engagement.",
      type: ""
    },
    {
      Icon: AdpIcon,
      title: "ADP",
      role: "Senior Member Technical",
      period: "Jan 2023 - Dec 2024",
      description:
        "Developed cross-platform mobile applications using Flutter, focusing on creating responsive and user-friendly interfaces.",
      type: ""
    },
    {
      Icon: MtIcon,
      title: "LTI Mindtree",
      role: "Senior Engineer",
      period: "Jan 2019 - Jan 2023",
      description:
        "Leading technical initiatives and coordinating developer activities",
      type: ""
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5A189A] via-[#9D4EDD] to-[#E0AAFF]">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and contributions to various organizations.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {experiences.map(({ Icon, title, role, period, description, type }, index) => (
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
                <div className="group bg-[#1a1a1a]/60 p-4 rounded-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_4px_rgba(157,77,221,0.3)]">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* Left side: Icon + Details */}
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/10 p-2 rounded-full">
                        <Icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-semibold text-white">{title}</h3>
                          {type && (
                            <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-[#d1b3ff]/20 via-[#b38dff]/20 to-[#a678f5]/20 text-[#b38dff]">
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg text-gray-300 mb-1">{role}</h4>
                        <p className="text-gray-400">{description}</p>
                      </div>
                    </div>

                    {/* Right side: Period */}
                    <div className="text-sm text-gray-400 mt-2 md:mt-0 md:text-right whitespace-nowrap">
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

export default Experience;
