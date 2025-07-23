import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Database,
  GitBranch
} from 'lucide-react';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
}
const PythonLogo: React.FC<LogoProps> = ({ className, style }) => (
  <img
    src="https://img.icons8.com/color/480/python--v1.png"
    alt="Python"
    className={`w-12 h-12 ${className}`}
    style={style}
  />
);
const ReactNextLogo: React.FC<LogoProps> = ({ className, style }) => (
  <div
    className={`flex items-center justify-center gap-2 ${className}`}
    style={style}
  >
    <img
      src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
      alt="React"
      className="w-6 h-6"
    />
    <img
      src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
      alt="Next.js"
      className="w-6 h-6 bg-white rounded-full p-0.5"
    />
  </div>
);
const CSharpLogo: React.FC<LogoProps> = ({ className, style }) => (
  <img
    src="https://cdn.worldvectorlogo.com/logos/c--4.svg"
    alt="C#"
    className={`w-10 h-10 ${className}`}
    style={style}
  />
);

const AngularLogo: React.FC<LogoProps> = ({ className, style }) => (
  <img
    src="https://angular.io/assets/images/logos/angular/angular.svg"
    alt="Angular"
    className={`w-10 h-10 ${className}`}
    style={style}
  />
);
const AzureALogo: React.FC<LogoProps> = ({ className, style }) => (
  <img src={`${import.meta.env.BASE_URL}azure-devops.svg`}

    alt="Azure"
    className={`w-10 h-10 ${className}`}
    style={style}
  />
);


const AzurePortalLogo: React.FC<LogoProps> = ({ className, style }) => (
  <img
    src={`${import.meta.env.BASE_URL}microsoft-azure.svg`}
    alt="Azure Portal"
    className={`w-10 h-10 ${className}`}
    style={style}
  />
);

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '50px',
  });


  const skills = [

    {
      Icon: PythonLogo,
      title: 'Python',
      description: 'Efficient scripting, automation and backend services using Python.',
    },
    {
      Icon: ReactNextLogo,
      title: 'React / Next.js',
      description: 'Frontend development using React and full-stack workflows with Next.js.',
    },
    {
      Icon: CSharpLogo,
      title: '.NET Core',
      description: 'Robust backend APIs and scalable systems built with .NET Core.',
    },
    {
      Icon: Database,
      title: 'SQL & MongoDB',
      description: 'Strong grasp on relational and NoSQL databases for data-driven apps.',
    },
    {
      Icon: GitBranch,
      title: 'Git & Jira',
      description: 'Version control and agile project tracking with Git and Jira.',
    },
    {
      Icon: AngularLogo,
      title: 'Angular',
      description: 'SPAs using Angular and TypeScript for enterprise-grade apps.',
    },
    {
      Icon: Code2,
      title: 'JavaScript',
      description: 'ES6+ JavaScript for building dynamic and interactive web apps.',
    },
    {
      Icon: AzureALogo,
      title: 'Azure & DevOps',
      description: 'CI/CD, deployment pipelines, and Azure cloud services.',
    },
    {
      Icon: AzurePortalLogo,
      title: 'Azure Portal',
      description: 'Managing cloud infrastructure and services through Azure Portal.',
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#5A189A] via-[#9D4EDD] to-[#E0AAFF]"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{ backgroundSize: '300% 300%' }}
          >
            Skills
          </motion.h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I use to build full-stack, scalable, and cloud-ready applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map(({ Icon, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl p-6 backdrop-blur-md bg-gradient-to-br from-[#2a105b]/70 via-[#3e1f6e]/70 to-[#4c2884]/70 border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(199,125,255,0.3)]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-gray-200" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
