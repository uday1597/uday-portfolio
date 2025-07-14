import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { lazy, Suspense } from 'react';

const LazyImage = lazy(() => import('../components/LazyImage'));

const projects = [
  {
    title: "Kathanam",
    description: "A full-stack real-time storytelling platform built with Next.js, React, and MongoDB. It enables dynamic user interactions and smooth state handling across multiple views.",
    image: "/kathanam.png",
    tags: ["Next JS", "React", "Mongo db"],
    github: "https://github.com/uday1597/The-Kathanam-project",
    live: "https://the-kathanam-project.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "An interactive 3D portfolio built with React, Tailwind CSS, and Spline, featuring smooth animations, type-safe components with TypeScript, and responsive design for a modern web presence.",
    image: "/portfolio.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Spline"],
    github: "https://github.com/uday1597/uday-portfolio",
    live: "https://uday-portfolio-navy.vercel.app/"
  },
  {
    title: "Python projects",
    description: "A collection of diverse Python-based applications and scripts, covering automation, data manipulation, and small tools to demonstrate practical use of core Python concepts.",
    image: "/python-coding.jpg",
    tags: ["Python", "Automation", "Web Scraping", "Tkinter", "Pandas"],
    github: "https://github.com/search?q=owner%3Auday1597+python&type=repositories"
  },
  {
    title: "Dot net concepts",
    description: "A curated repository of .NET and C# concepts including API design, Entity Framework, authentication, and clean architecture principles — ideal for interview prep and backend mastery.",
    image: "/dotnet.avif",
    tags: [".Net", "C#"],
    github: "https://github.com/uday1597/dotnetConcepts"
  },
  {
    title: "Bought it",
    description: "A full-stack e-commerce platform built with React on the frontend and Node.js/Express with MongoDB on the backend. Features product browsing, detail views, and a structured API powered by Mongoose.",
    image: "/boughtit.png",
    tags: ["React", "Dot net", "JavaScript", "Node.js", "Express.js", "Axios", "MongoDB", "Mongoose"],
    github: "https://github.com/uday1597/bought-it"
  },
  {
    title: "Krishna Airlines",
    description: "An airline management system with features like flight booking, seat selection, and user authentication, built for a smooth and interactive user experience.",
    image: "/krishna-airlines.png",
    tags: ["React 18", "Redux Toolkit, Thunk", "MUI v5, Atlaskit, Material UI v4", "Google & Facebook Login", "React Hook Form", "Axios", "Jest", "React Router"],
    github: "https://github.com/uday1597/airline_mangement"
  }
  // {
  //   title: "Arcadia Design",
  //   description: "A modern and visually striking portfolio website for Arcadia Design, a Canadian architecture firm. The site highlights their innovative projects, design philosophy, and expertise, offering an immersive experience for potential clients and collaborators.",
  //   image: "/images/arcadia.png",
  //   tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "TypeScript"],
  //   github: "#",
  //   live: "https://www.arcadiadesignsinc.com/"
  // }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-glass rounded-xl overflow-hidden group hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Suspense fallback={<div className="w-full h-48 bg-blue-500/10 animate-pulse rounded-t-xl" />}>
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-48 object-cover transform transition-transform duration-500 ${project.title === "Portfolio Website" || project.title === "Monktechnology.net"
                      ? "scale-110 group-hover:scale-125"
                      : "group-hover:scale-110"
                      }`}
                  />
                </Suspense>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.live && <a
                    href={project.live}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>}
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;