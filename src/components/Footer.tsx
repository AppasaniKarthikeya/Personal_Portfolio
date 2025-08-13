import React from 'react';
import { Heart, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>and</span>
            <Code size={16} className="text-blue-400" />
            <span>by Karthikeya</span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Karthikeya. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}