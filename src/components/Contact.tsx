import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Check } from 'lucide-react';

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/AppasaniKarthikeya', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/appasani-karthikeya-5325a0374/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/Karthikeya2211', label: 'Twitter' }
  ];

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'ammavanshi16@gnail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 9676374416' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Hyderabad, India' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const formURL =
      'https://docs.google.com/forms/d/e/1FAIpQLSe2P4-TJtE0F4YqPD06D39uzuA5c40R8wVt66eYace38trfEw/formResponse';

    const formBody = new FormData();
    formBody.append('entry.1711669392', formData.name);
    formBody.append('entry.872050336', formData.email);
    formBody.append('entry.1671432879', formData.message);

    try {
      await fetch(formURL, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors' // prevents CORS issues
      });

      // Show success state
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Whether you're looking for a backend engineer, have a project in mind, or just want to connect, I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-colors"
                >
                  <div className="text-blue-400">{item.icon}</div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-vertical"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                  isSent
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                }`}
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : isSent ? (
                  <>
                    <Check size={20} /> Message Sent
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
