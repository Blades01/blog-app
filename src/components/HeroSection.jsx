import React from 'react';
import { Star } from 'lucide-react';

const HeroSection = () => {
  // Flower decoration component
  const FlowerDecoration = ({ color, size = "w-16 h-16", className = "" }) => (
    <div className={`${size} relative ${className} animate-pulse`}>
      <div className={`absolute inset-0 ${color} rounded-full opacity-80 flex items-center justify-center`}>
        <div className="relative w-full h-full">
          {/* Flower petals */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full opacity-90"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-white rounded-full opacity-90"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full opacity-90"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-white rounded-full opacity-90"></div>
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-90"></div>
          <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-90"></div>
          <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-90"></div>
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-90"></div>
          {/* Center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative flowers */}
      <FlowerDecoration 
        color="bg-purple-300" 
        size="w-32 h-32" 
        className="absolute top-20 left-10 opacity-60 animate-bounce" 
        style={{ animationDelay: '0s', animationDuration: '4s' }}
      />
      <FlowerDecoration 
        color="bg-green-300" 
        size="w-24 h-24" 
        className="absolute top-32 right-20 opacity-70 animate-bounce" 
        style={{ animationDelay: '1s', animationDuration: '3s' }}
      />
      <FlowerDecoration 
        color="bg-blue-300" 
        size="w-28 h-28" 
        className="absolute bottom-32 right-10 opacity-60 animate-bounce" 
        style={{ animationDelay: '2s', animationDuration: '5s' }}
      />
      <FlowerDecoration 
        color="bg-pink-300" 
        size="w-20 h-20" 
        className="absolute bottom-20 left-20 opacity-70 animate-bounce" 
        style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}
      />
      <FlowerDecoration 
        color="bg-yellow-300" 
        size="w-36 h-36" 
        className="absolute top-1/2 left-5 opacity-50 animate-bounce" 
        style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}
      />

      {/* Star decoration */}
      <Star 
        className="absolute bottom-40 left-1/3 w-8 h-8 text-yellow-400 opacity-80 animate-pulse" 
        fill="currentColor"
      />

      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          A space to Heal...
          <br />
          <span className="text-4xl md:text-6xl">peace begins here</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Take a breath. You're safe here. Read, heal,
          <br />
          feel, and begin again.
        </p>

        <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Explore
        </button>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-100 to-transparent"></div>
    </section>
  );
};

export default HeroSection;