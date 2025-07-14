import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
    const cards = [
    {
      Icon: Code,
      title: 'Python Developer',
      description:
        'I’ve worked on various Python projects ranging from scripting and automation to web scraping using BeautifulSoup and Selenium. I explored data science libraries like Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn to analyze and visualize data. I’ve also built simple GUIs using Tkinter and experimented with game logic using Turtle. Most of my development and experimentation was done using PyCharm, Jupyter Notebook, and Google Colab.',
    },
    {
      Icon: Server,
      title: '.NET Full Stack Developer',
      description:
        'I’ve built backend services using .NET Core and C#, implementing RESTful APIs and integrating them with frontend applications. I explored Entity Framework for data access, followed clean architecture practices, and maintained modular project structures. I created a repository of .NET concepts for learning and practical use. I’ve also worked with SQL Server, SQLite, and PostgreSQL for database operations, along with authentication flows in full-stack apps.',
    },
    {
      Icon: LayoutDashboard,
      title: 'React & Next.js Developer',
      description:
        'I’ve developed responsive, component-driven UIs using React, Tailwind CSS, and TypeScript. I’ve also built full-stack apps using Next.js and MongoDB, integrating APIs and managing client-side state. My portfolio features 3D UI using Spline, and I’ve worked on deploying apps using platforms like Vercel. Projects like Kathanam and Bought It showcase real-world use of React, Next.js, API integration, and MongoDB in production-ready applications.',
    },
  ];
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#5A189A] via-[#C77DFF] to-[#E0AAFF]">
            About Me
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Deep-thinking developer who thrives on untangling complex logic. <br />
            Builds performant frontends with <span className="text-[#C77DFF]">React</span> and <span className="text-[#E0AAFF]">Next.js</span>. <br />
            Crafts scalable backends using <span className="text-[#C77DFF]">Python</span>, <span className="text-[#E0AAFF]">.NET</span>, <span className="text-[#C77DFF]">SQL</span> & <span className="text-[#E0AAFF]">MongoDB</span>. <br />
            Relentless in optimization, precise in problem-solving, and<br/> grounded in practical learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8" ref={ref}>
      {cards.map((item, index) => {
        const [flipped, setFlipped] = useState(false);
        return (
          <motion.div
            key={index}
            onClick={() => setFlipped(!flipped)}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="perspective cursor-pointer"
          >
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-72 rounded-xl shadow-lg transition-transform transform-style-preserve-3d"
            >
              {/* Front */}
              <div className="absolute inset-0 p-6 backface-hidden bg-[#1b1b1b] flex flex-col items-center justify-center rounded-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#5A189A] via-[#9D4EDD] to-[#C77DFF] flex items-center justify-center mb-4">
                  <item.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#E0AAFF]">{item.title}</h3>
                {/* Bounce pointer */}
                <motion.div
  animate={{ x: [0, 6, 0] }}
  transition={{ repeat: Infinity, duration: 1.2 }}
  className="absolute bottom-3 right-4 text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#9D4EDD] via-[#C77DFF] to-[#E0AAFF] font-medium"
>
  More at the back →
</motion.div>


              </div>

              {/* Back */}
              <div className="absolute inset-0 p-6 backface-hidden rotateY-180 rounded-xl bg-gradient-to-r from-[#5A189A] via-[#9D4EDD] to-[#C77DFF] flex items-center justify-center">
                <p className="text-white text-sm text-center leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
      </div>
    </section>
  );
};

export default About;
