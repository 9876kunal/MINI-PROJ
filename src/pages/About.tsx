import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Pushkar Verma',
    role: 'Full Stack Developer',
    email: 'www.pushkarverma17@gmail.com',
    image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
  },
  {
    name: 'Kunal Gaykwad',
    role: 'UI/UX Designer',
    email: 'kunalgaykwad0001@gmail.com',
    image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60112.jpg',
  },
  {
    name: 'Rayyan Muneer',
    role: 'Video Editor',
    link: 'https://www.google.com',
    image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60113.jpg',
  },
];

const About = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate developers and designers dedicated to creating
            exceptional digital experiences through web development and video editing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <a
                    href={member.email || member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {member.name}
                  </a>
                </h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;