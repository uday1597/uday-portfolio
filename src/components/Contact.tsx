import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Instagram, FileText } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const gradientText = "bg-gradient-to-r from-[#5A189A] via-[#9D4EDD] to-[#E0AAFF]";

  const socialLinks = [
    {
      Icon: Github,
      href: "https://github.com/uday1597",
      label: "GitHub"
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/uday-surya/",
      label: "LinkedIn"
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/udaysurya/",
      label: "Instagram"
    }
  ];

  return (
    <section id="contact" className="py-16 w-full">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 w-full max-w-2xl"
        >
          <h2 className={`text-4xl font-bold mb-4 bg-clip-text text-transparent ${gradientText}`}>
            Start a Conversation
          </h2>
          <p className="text-gray-400 text-lg">
            Whether it’s code, design, or innovation — I’d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8 w-full max-w-sm"
        >
          {/* Email */}
          <div className="flex flex-col items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => window.location.href = 'mailto:udaysurya1597@gmail.com'}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5A189A] via-[#9D4EDD] to-[#E0AAFF] flex items-center justify-center hover:opacity-90 transition duration-300"
            >
              <Mail className="w-5 h-5 text-white" />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-base font-semibold mb-0.5">Email</h3>
              <a
                href="mailto:udaysurya1597@gmail.com"
                className={`text-lg font-medium bg-clip-text text-transparent ${gradientText} hover:underline`}
              >
                udaysurya1597@gmail.com
              </a>

            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-3">
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5A189A] via-[#9D4EDD] to-[#E0AAFF] flex items-center justify-center hover:opacity-90 transition duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <h3 className="text-base font-semibold mb-0.5">Social Media</h3>
              <p className="text-gray-400">Connect with me on social platforms</p>
            </motion.div>
          </div>

          {/* Resume Download */}
          <div className="flex flex-col items-center gap-3">
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              href="/resume.pdf"
              download="Uday_Surya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gradient-to-br from-[#5A189A] via-[#9D4EDD] to-[#E0AAFF] text-white flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-5 h-5 text-white" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
