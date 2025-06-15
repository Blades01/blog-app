import React, { useState } from 'react';
import { MessageCircle, Users, Heart, Share2, Calendar, Clock, Pin, TrendingUp } from 'lucide-react';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const discussions = [
    {
      id: 1,
      title: "How do you find motivation to write when everything feels heavy?",
      author: "Luna M.",
      category: "Support",
      replies: 23,
      likes: 45,
      lastActivity: "2 hours ago",
      excerpt: "I've been struggling to put words on paper lately. Everything feels so overwhelming...",
      isPinned: true
    },
    {
      id: 2,
      title: "Weekly Writing Prompt: Letters to Your Past Self",
      author: "Community Team",
      category: "Writing Prompts",
      replies: 67,
      likes: 89,
      lastActivity: "30 minutes ago",
      excerpt: "This week's prompt: Write a letter to yourself from 5 years ago. What would you want them to know?",
      isPinned: false
    },
    {
      id: 3,
      title: "Sharing my first piece about grief - feedback welcome",
      author: "Alex R.",
      category: "Share & Feedback",
      replies: 12,
      likes: 28,
      lastActivity: "4 hours ago",
      excerpt: "I finally wrote something about losing my mom. It's raw and messy, but I think it's ready to share...",
      isPinned: false
    },
    {
      id: 4,
      title: "Creating a morning writing ritual that actually sticks",
      author: "Jordan K.",
      category: "Writing Tips",
      replies: 34,
      likes: 52,
      lastActivity: "1 day ago",
      excerpt: "After months of failed attempts, I've finally found a morning routine that works. Here's what helped...",
      isPinned: false
    }
  ];

  const events = [
    {
      id: 1,
      title: "Virtual Writing Circle",
      date: "June 20, 2025",
      time: "7:00 PM EST",
      attendees: 24,
      maxAttendees: 30,
      description: "Join us for a supportive writing session where we write together in comfortable silence."
    },
    {
      id: 2,
      title: "Healing Through Poetry Workshop",
      date: "June 25, 2025",
      time: "3:00 PM EST",
      attendees: 18,
      maxAttendees: 25,
      description: "Explore how poetry can be a pathway to processing difficult emotions and experiences."
    },
    {
      id: 3,
      title: "Monthly Community Check-in",
      date: "June 30, 2025",
      time: "6:00 PM EST",
      attendees: 45,
      maxAttendees: 50,
      description: "Share your writing journey, celebrate wins, and connect with fellow community members."
    }
  ];

  const categories = [
    { name: 'all', label: 'All', count: 156 },
    { name: 'Support', label: 'Support Circle', count: 45 },
    { name: 'Writing Prompts', label: 'Writing Prompts', count: 23 },
    { name: 'Share & Feedback', label: 'Share & Feedback', count: 67 },
    { name: 'Writing Tips', label: 'Writing Tips', count: 21 }
  ];

  const filteredDiscussions = selectedCategory === 'all' 
    ? discussions 
    : discussions.filter(d => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Our Writing Community
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A safe space for writers to connect, share, and grow together. 
            Your voice matters here, and your story is welcome.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Users className="w-6 h-6" />, label: "Active Members", value: "2,847" },
            { icon: <MessageCircle className="w-6 h-6" />, label: "Discussions", value: "1,234" },
            { icon: <Heart className="w-6 h-6" />, label: "Stories Shared", value: "856" },
            { icon: <Calendar className="w-6 h-6" />, label: "Events This Month", value: "12" }
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full text-white mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {[
            { id: 'discussions', label: 'Discussions', icon: <MessageCircle className="w-5 h-5" /> },
            { id: 'events', label: 'Events', icon: <Calendar className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div>
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-green-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Discussions List */}
            <div className="space-y-4">
              {filteredDiscussions.map((discussion) => (
                <div key={discussion.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {discussion.isPinned && <Pin className="w-5 h-5 text-green-500 flex-shrink-0" />}
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 cursor-pointer">
                        {discussion.title}
                      </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      discussion.category === 'Support' ? 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300' :
                      discussion.category === 'Writing Prompts' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' :
                      discussion.category === 'Share & Feedback' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                      'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    }`}>
                      {discussion.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{discussion.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>by {discussion.author}</span>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{discussion.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{discussion.lastActivity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{event.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees}/{event.maxAttendees} attending</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
                <button className="w-full bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white py-3 rounded-lg font-medium transition-all duration-300">
                  Join Event
                </button>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Conversation?</h2>
          <p className="text-lg mb-8 opacity-90">
            Share your story, connect with fellow writers, and be part of a community that believes in the healing power of words.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Start Your First Discussion
          </button>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;