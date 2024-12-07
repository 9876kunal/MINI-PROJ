import React from 'react';
import { motion } from 'framer-motion';
import { Video, Code, Layout, Database, Camera, Edit } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing services for all types of content',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom website development using modern technologies',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-centered design solutions for digital products',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust backend solutions for web applications',
  },
  {
    icon: Camera,
    title: 'Content Creation',
    description: 'High-quality content creation for your digital needs',
  },
  {
    icon: Edit,
    title: 'Motion Graphics',
    description: 'Engaging motion graphics and animations',
  },
];

const Services = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <service.icon className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;