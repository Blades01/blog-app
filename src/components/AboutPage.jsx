import React from 'react';
import { Heart, Users, BookOpen, Mail, Github, Twitter, Instagram } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & Lead Writer",
      bio: "Sarah started BacktoWrites after her own healing journey through writing. She believes in the transformative power of words.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Michael Rivers",
      role: "Content Curator",
      bio: "Michael brings years of therapeutic writing experience, helping curate content that resonates with healing hearts.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Emma Thompson",
      role: "Community Manager",
      bio: "Emma fosters our writing community, creating safe spaces for vulnerable sharing and authentic connection.",
      image: "/api/placeholder/150/150"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authentic Healing",
      description: "We believe true healing comes from honest expression and gentle self-compassion."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Safe Community",
      description: "Creating spaces where vulnerability is welcomed and every story matters."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Mindful Writing",
      description: "Encouraging thoughtful, intentional writing that serves both writer and reader."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            About BacktoWrites
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're a community of writers, healers, and seekers who believe in the power of words 
            to transform pain into purpose, silence into song, and isolation into connection.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
            <p className="mb-6">
              BacktoWrites was born from a simple truth: sometimes we need to go back to the beginning 
              to move forward. Back to the raw honesty of putting pen to paper. Back to the courage 
              it takes to share our stories. Back to the healing that happens when we're truly seen.
            </p>
            <p className="mb-6">
              What started as one person's journal became a movement of thousands who discovered that 
              their words—messy, imperfect, and beautifully human—had the power to heal not just 
              themselves, but others walking similar paths.
            </p>
            <p>
              Today, we're more than a platform. We're a sanctuary for authentic expression, 
              a bridge between heartbreak and hope, and a reminder that your story—exactly as 
              it is—matters deeply.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg mb-8 opacity-90">
            Have questions, feedback, or want to collaborate? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a href="mailto:hello@backtowrites.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-5 h-5" />
              <span>hello@backtowrites.com</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;