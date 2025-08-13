import React from 'react';
import { Download, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              I'm Appasani Karthikeya
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
            Aspiring ML Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Machine Learning Enthusiast • Problem Solver • Code Craftsman
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
            <Download size={20} />
            Download Resume
          </button>
          <button 
            onClick={scrollToAbout}
            className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>

        <div 
          onClick={scrollToAbout}
          className="animate-bounce cursor-pointer"
        >
          <ArrowDown className="mx-auto text-gray-400 hover:text-blue-400 transition-colors" size={32} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
}
