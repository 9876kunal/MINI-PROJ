import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  {
    category: 'Frontend',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
  },
  {
    category: 'Backend',
    tools: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Video Editing',
    tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Motion'],
  },
  {
    category: 'Design',
    tools: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch'],
  },
];

const Technologies = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Technologies We Use</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our tech stack comprises modern and powerful tools for development and content creation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ scale: 1.1 }}
                    className="bg-indigo-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;