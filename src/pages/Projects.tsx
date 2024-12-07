import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with modern UI',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    category: 'Web Development',
  },
  {
    title: 'Corporate Video',
    description: 'Professional company introduction video with motion graphics',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
    category: 'Video Editing',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animated interactions',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
    category: 'Web Development',
  },
  {
    title: 'Product Showcase',
    description: 'Dynamic product demonstration video',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Video Editing',
  },
];

const Projects = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest work in web development and video editing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-indigo-400 cursor-pointer" />
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <span className="inline-block bg-indigo-600 px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;