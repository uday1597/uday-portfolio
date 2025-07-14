// Terminal.tsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './matrix.css';

type CommandResult = {
  type: 'text' | 'error' | 'list' | 'warning' | 'clear';
  content: string | string[];
};

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<{ command: string; result: CommandResult }[]>([
    { 
      command: '', 
      result: { 
        type: 'text', 
        content: "👋 Welcome to Uday's Playground. Type 'help' to explore experiments and labs." 
      } 
    }
  ]);
  const [showMatrix, setShowMatrix] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string): CommandResult => {
    const lowerCmd = cmd.toLowerCase().trim();

    switch (lowerCmd) {
      case 'help':
        return {
          type: 'list',
          content: [
            '=== 🧪 COMMANDS ===',
            '',
            '-- NAVIGATION --',
            'help                Show this menu',
            'clear               Clear terminal',
            'whoami              Know about me',
            '',
            '-- EXPLORE --',
            'ls                  List folders',
            'ls playground/      View ongoing experiments',
            'ls labs/            Explore creative labs',
            '',
            '-- VIEWING --',
            'cat playground.md   Read playground log',
            'cat labs.md         See what’s brewing',
            'cat docs.md         View technical guides',
            ''
          ]
        };
      case 'clear':
        return { type: 'clear', content: '' };
      case 'ls':
        return { type: 'list', content: ['playground/', 'labs/', 'docs.md'] };
      case 'ls playground/':
        return { type: 'list', content: ['canvas-doodles/', 'ai-sandbox/', 'motion-playground/'] };
      case 'ls labs/':
        return { type: 'list', content: ['terminal-ui/', 'theme-switcher/', 'live-preview/'] };
      case 'cat playground.md':
        return {
          type: 'text',
          content: `
# Uday's Playground

This is where I tinker with frontend animations, AI concepts, and React transitions.

- 🎨 Canvas animations using WebGL & Three.js
- 🤖 Experiments with OpenAI APIs
- 🌀 Framer-motion playgrounds
`
        };
      case 'cat labs.md':
        return {
          type: 'text',
          content: `
# Creative Labs

These are live components built and tested on the fly:

- 💻 Terminal-based UI
- 🌗 Theme togglers using Tailwind
- ✨ Live Markdown Previewers
- 🔄 Real-time Chat UIs
`
        };
      case 'cat docs.md':
        return {
          type: 'text',
          content: `
# Tech Docs

Guides and notes from my build journey:

- Setup guides for React + Tailwind + Framer
- TypeScript typing tips
- Git & CI/CD quick references
`
        };
      case 'whoami':
        return {
          type: 'text',
          content: `I'm Uday Surya — frontend engineer, React enthusiast, and creative coder.`
        };
      default:
        return {
          type: 'error',
          content: `❌ Unknown command: '${cmd}'. Try 'help' to see available commands.`
        };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    const result = executeCommand(command);
    if (result.type === 'clear') {
      setHistory([
        { 
          command: '', 
          result: { 
            type: 'text', 
            content: "👋 Welcome to Uday's Playground. Type 'help' to explore experiments and labs." 
          } 
        }
      ]);
    } else {
      setHistory([...history, { command, result }]);
    }
    setCommand('');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 py-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#5A189A] via-[#9D4EDD] to-[#E0AAFF]">
            Terminal
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interact with my code playground through this terminal interface. Type 'help' to begin.
          </p>
        </div>

        <div 
          id="terminal-container"
          className="bg-[#0a0a0a] border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center bg-gray-800 px-4 py-2 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-sm text-gray-400">uday@playground:~</div>
          </div>

          <div 
            id="terminal-output"
            ref={terminalRef}
            className="p-6 h-[550px] overflow-y-auto font-mono text-sm"
          >
            {history.map((item, i) => (
              <div key={i} className="mb-2">
                {item.command && (
                  <div className="flex">
                    <span className="text-green-500">uday@playground:~$</span>
                    <span className="ml-2 text-white">{item.command}</span>
                  </div>
                )}
                <div className={`mt-1 ${
                  item.result.type === 'error' ? 'text-red-400' : 
                  item.result.type === 'warning' ? 'text-yellow-400' : 
                  'text-gray-300'
                }`}>
                  {Array.isArray(item.result.content) ? (
                    item.command === 'help' ? (
                      <div className="flex flex-col space-y-0.5">
                        {(item.result.content as string[]).map((line, j) => (
                          <div key={j} className={
                            line.startsWith('===') ? 'text-purple-400 font-bold mt-1' : 
                            line.startsWith('--') ? 'text-violet-400 font-semibold mt-2' : 
                            line === '' ? 'h-1' : 'pl-2'
                          }>
                            {line}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {(item.result.content as string[]).map((line, j) => (
                          <div key={j}>{line}</div>
                        ))}
                      </div>
                    )
                  ) : (
                    <div className="whitespace-pre-wrap">{item.result.content}</div>
                  )}
                </div>
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex mt-2">
              <span className="text-green-500 shrink-0">uday@playground:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="ml-2 bg-transparent border-none outline-none text-white w-full"
              />
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Terminal;
