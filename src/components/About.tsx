import React from 'react';
import { Code, Target, Zap, Users } from 'lucide-react';

export default function About() {
  const skills = [
    'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Machine Learning'
  ];

  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal-Oriented',
      description: 'FAANG internship → Backend Engineer → ML Specialist'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full-Stack Knowledge',
      description: 'Proficient in multiple programming languages'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Learner',
      description: 'Quick to adapt and master new technologies'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Player',
      description: 'Collaborative approach to problem-solving'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating efficient backend solutions and exploring the frontiers of machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-800 rounded-2xl p-2">
              <img
                src="/WhatsApp Image 2025-08-13 at 17.45.28_63e18480.jpg"
                alt="Karthikeya - Backend Engineer"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="prose prose-invert">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a dedicated computer science student with a passion for backend engineering and machine learning. 
                My journey in technology is driven by curiosity and a desire to build scalable, efficient systems that 
                solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Currently focused on strengthening my foundation in backend technologies while exploring the fascinating 
                world of ML algorithms. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}