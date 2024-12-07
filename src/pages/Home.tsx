import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Video, Globe } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
            >
              Welcome to Techsol
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Professional Video Editing & Web Development Services
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium flex items-center mx-auto space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gray-700 rounded-lg"
            >
              <Video className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Editing</h3>
              <p className="text-gray-300">Professional video editing services for all your needs</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gray-700 rounded-lg"
            >
              <Code className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-300">Custom web solutions built with modern technologies</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gray-700 rounded-lg"
            >
              <Globe className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Digital Solutions</h3>
              <p className="text-gray-300">Comprehensive digital services for your business</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;