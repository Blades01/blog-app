import React, { useState } from 'react';
import { Heart, BookOpen, Star, Quote, ArrowRight, Calendar, User, Clock } from 'lucide-react';

const StoriesPage = () => {
  const [selectedType, setSelectedType] = useState('all');

  // Dummy stories data
  const stories = [
    {
      id: 1,
      title: "The Letter I Never Sent",
      excerpt: "Sometimes the most important conversations happen in silence. This is about the words I wished I had said...",
      content: "Dear Mom, There are so many things I wish I could tell you now that you're gone. I kept this letter in my drawer for months, afraid to read it aloud to your empty chair...",
      type: "Personal",
      author: "Anonymous",
      publishDate: "2024-06-12",
      readTime: "4 min read",
      likes: 187,
      featured: true,
      color: "from-rose-400 to-pink-500"
    },
    {
      id: 2,
      title: "Finding Light in Room 302",
      excerpt: "A hospital room became my teacher, and illness became my unlikely guide to gratitude...",
      content: "The fluorescent lights hummed their familiar tune as I stared at the ceiling tiles I had memorized over the past three weeks. Room 302 had become my entire world...",
      type: "Healing",
      author: "Maria Santos",
      publishDate: "2024-06-10",
      readTime: "8 min read",
      likes: 234,
      featured: true,
      color: "from-emerald-400 to-green-500"
    },
    {
      id: 3,
      title: "The Garden We Planted Together",
      excerpt: "Love lives on in the smallest things - in seeds that bloom long after goodbye...",
      content: "Every spring, the daffodils return without fail. They push through the still-frozen ground with a determination that reminds me so much of her...",
      type: "Love & Loss",
      author: "Robert Chen",
      publishDate: "2024-06-08",
      readTime: "6 min read",
      likes: 156,
      featured: false,
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 4,
      title: "Dancing Alone at 3 AM",
      excerpt: "Sometimes healing looks like bare feet on cold kitchen tiles and music only you can hear...",
      content: "The house was quiet except for the soft jazz flowing from my phone. I stood in the kitchen, surrounded by the remnants of a difficult day...",
      type: "Self-Discovery",
      author: "Luna Williams",
      publishDate: "2024-06-05",
      readTime: "5 min read",
      likes: 98,
      featured: false,
      color: "from-violet-400 to-purple-500"
    },
    {
      id: 5,
      title: "The Stranger on the Bridge",
      excerpt: "Sometimes angels appear as ordinary people who show up at exactly the right moment...",
      content: "I was twenty-two and convinced that no one would miss me. The bridge stretched ahead, cold and uninviting in the pre-dawn darkness...",
      type: "Hope",
      author: "David Kim",
      publishDate: "2024-06-03",
      readTime: "10 min read",
      likes: 312,
      featured: true,
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 6,
      title: "Conversations with My Younger Self",
      excerpt: "If I could sit with the girl I used to be, here's what I would tell her...",
      content: "Dear 16-year-old me, I know you're reading this while hiding in the bathroom at school, tears threatening to spill over your algebra homework...",
      type: "Growth",
      author: "Sarah Johnson",
      publishDate: "2024-06-01",
      readTime: "7 min read",
      likes: 145,
      featured: false,
      color: "from-teal-400 to-cyan-500"
    }
  ];

  const storyTypes = [
    { name: 'all', label: 'All Stories', count: stories.length },
    { name: 'Personal', label: 'Personal', count: stories.filter(s => s.type === 'Personal').length },
    { name: 'Healing', label: 'Healing', count: stories.filter(s => s.type === 'Healing').length },
    { name: 'Love & Loss', label: 'Love & Loss', count: stories.filter(s => s.type === 'Love & Loss').length },
    { name: 'Hope', label: 'Hope', count: stories.filter(s => s.type === 'Hope').length },
    { name: 'Growth', label: 'Growth', count: stories.filter(s => s.type === 'Growth').length }
  ];

  const filteredStories = selectedType === 'all' 
    ? stories 
    : stories.filter(story => story.type === selectedType);

  const featuredStories = stories.filter(story => story.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-10 h-10 text-purple-500" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
              Stories That Heal
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real experiences, honest reflections, and moments of grace. These are stories from the heart, 
            shared by brave souls who found light in their darkness.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 mb-12 text-center shadow-lg">
          <Quote className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <blockquote className="text-2xl font-light text-gray-700 dark:text-gray-300 italic mb-4">
            "Your story matters. Your voice matters. Your healing matters."
          </blockquote>
          <cite className="text-gray-500 dark:text-gray-400">— The BacktoWrites Community</cite>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Featured Stories
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredStories.slice(0, 2).map((story) => (
            <div 
              key={story.id}
              className={`bg-gradient-to-br ${story.color} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5" fill="currentColor" />
                <span className="font-medium">Featured Story</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
              <p className="text-white/90 mb-6 leading-relaxed">{story.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{story.readTime}</span>
                  </div>
                </div>
                
                <button className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2">
                  Read Story
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Categories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {storyTypes.map((type) => (
            <button
              key={type.name}
              onClick={() => setSelectedType(type.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedType === type.name
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {type.label} ({type.count})
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div 
              key={story.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className={`h-3 bg-gradient-to-r ${story.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                    {story.type}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{story.likes}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{story.author}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                  </div>
                  
                  <button className="text-purple-500 hover:text-purple-600 font-medium transition-colors">
                    Read →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-3xl p-8 md:p-12 text-center">
          <BookOpen className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Your Story Matters
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Have a story that might help someone else on their healing journey? We believe in the power 
            of shared experiences and the courage it takes to be vulnerable. Your voice could be exactly 
            what someone needs to hear today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Share Your Story
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
              Story Guidelines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;