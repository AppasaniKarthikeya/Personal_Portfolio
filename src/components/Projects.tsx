import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Backend API',
      description: 'A robust RESTful API built with Node.js and Express, featuring user authentication, product management, order processing, and payment integration.',
      image: 'https://images.pexels.com/photos/6348047/pexels-photo-6348047.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
      status: 'Completed',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 2,
      title: 'Machine Learning Price Predictor',
      description: 'An ML model that predicts real estate prices using Python and scikit-learn. Includes data preprocessing, feature engineering, and model evaluation.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      status: 'Completed',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A full-stack web application for team task management with real-time updates, user roles, and project tracking capabilities.',
      image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Tailwind'],
      status: 'In Progress',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analysis, built with modern web technologies and featuring real-time data processing.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      status: 'Planning',
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/20';
      case 'In Progress': return 'text-orange-400 bg-orange-400/20';
      case 'Planning': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in backend development, machine learning, and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}