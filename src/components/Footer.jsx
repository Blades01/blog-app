import React from 'react';
import { 
  Heart, 
  Mail, 
  Twitter, 
  Instagram, 
  Facebook, 
  ArrowUp,
  BookOpen,
  Flower
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Articles', href: '#articles' },
    { name: 'Stories', href: '#stories' },
    { name: 'Community', href: '#community' },
    { name: 'About', href: '#about' }
  ];

  const categories = [
    { name: 'Healing', href: '#healing' },
    { name: 'Self-Care', href: '#self-care' },
    { name: 'Mindfulness', href: '#mindfulness' },
    { name: 'Growth', href: '#growth' }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@backtowrites.com', name: 'Email' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Flower className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-bold text-gray-800">BacktoWrites</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A space to heal, peace begins here. Take a breath, you're safe here. 
              Read, heal, feel, and begin again.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-600 hover:text-green-500 hover:shadow-md transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span>© {currentYear} BacktoWrites. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for healing souls.</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;