import React, { useState } from 'react';
import { Search, Filter, Calendar, User, Heart, MessageCircle, BookOpen, Clock } from 'lucide-react';
import PostCard from './PostCard';

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  // Dummy articles data
  const articles = [
    {
      id: 1,
      title: "Finding Peace in Morning Rituals",
      content: "Starting your day with intention can transform your entire perspective. When we create sacred moments in the morning, we set a foundation for healing that carries us through...",
      imageUrl: "/api/placeholder/400/300",
      category: { name: "Self-Care" },
      author: "Sarah Chen",
      publishDate: "2024-06-10",
      readTime: "8 min read",
      likes: 124,
      comments: 23,
      tags: [{ name: "morning" }, { name: "ritual" }, { name: "mindfulness" }]
    },
    {
      id: 2,
      title: "The Art of Letting Go",
      content: "Sometimes holding on does more damage than letting go. This gentle exploration of release teaches us that healing begins when we stop fighting what is...",
      imageUrl: "/api/placeholder/400/300",
      category: { name: "Healing" },
      author: "Michael Rivers",
      publishDate: "2024-06-08",
      readTime: "12 min read",
      likes: 89,
      comments: 15,
      tags: [{ name: "release" }, { name: "acceptance" }, { name: "growth" }]
    },
    {
      id: 3,
      title: "Writing Through the Pain",
      content: "Words have the power to heal what silence cannot touch. In this piece, we explore how journaling becomes a bridge between hurt and healing...",
      imageUrl: "/api/placeholder/400/300",
      category: { name: "Growth" },
      author: "Emma Thompson",
      publishDate: "2024-06-05",
      readTime: "6 min read",
      likes: 156,
      comments: 31,
      tags: [{ name: "writing" }, { name: "therapy" }, { name: "expression" }]
    },
    {
      id: 4,
      title: "Breathing Through Anxiety",
      content: "Your breath is always with you, a constant companion in moments of fear. Learn simple techniques that can anchor you when anxiety threatens to overwhelm...",
      imageUrl: "/api/placeholder/400/300",
      category: { name: "Mindfulness" },
      author: "Dr. James Park",
      publishDate: "2024-06-03",
      readTime: "10 min read",
      likes: 203,
      comments: 42,
      tags: [{ name: "anxiety" }, { name: "breathing" }, { name: "calm" }]
    },
    {
      id: 5,
      title: "The Beauty of Imperfection",
      content: "Perfection is not the goal; authenticity is. This reflection on embracing our flaws reveals the profound beauty found in being genuinely human...",
      imageUrl: "/api/placeholder/400/300",
      category: { name: "Self-Acceptance" },
      author: "Luna Martinez",
      publishDate: "2024-06-01",
      readTime: "7 min read",
      likes: 92,
      comments: 18,
      tags: [{ name: "imperfection" }, { name: "authenticity" }, { name: "self-love" }]
    },
    {
      id: 6,
      title: "Creating Sacred Spaces at Home",
      content: "Your environment shapes your inner world. Discover how to transform any corner of your home into a sanctuary for peace and reflection...",
      imageUrl: "/api/placeholder/400/300",
      category: { name: "Environment" },
      author: "David Kim",
      publishDate: "2024-05-29",
      readTime: "9 min read",
      likes: 78,
      comments: 12,
      tags: [{ name: "space" }, { name: "sanctuary" }, { name: "peace" }]
    }
  ];

  const categories = [
    { name: 'all', label: 'All Articles', count: articles.length },
    { name: 'Healing', label: 'Healing', count: articles.filter(a => a.category.name === 'Healing').length },
    { name: 'Self-Care', label: 'Self-Care', count: articles.filter(a => a.category.name === 'Self-Care').length },
    { name: 'Mindfulness', label: 'Mindfulness', count: articles.filter(a => a.category.name === 'Mindfulness').length },
    { name: 'Growth', label: 'Growth', count: articles.filter(a => a.category.name === 'Growth').length }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category.name === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.likes - a.likes;
      case 'oldest':
        return new Date(a.publishDate) - new Date(b.publishDate);
      case 'latest':
      default:
        return new Date(b.publishDate) - new Date(a.publishDate);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Articles for the Soul
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Thoughtful pieces on healing, growth, and finding peace in the everyday moments. 
            Each article is crafted with care to meet you exactly where you are.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArticles.map((article, index) => (
            <div key={article.id} className="group">
              <PostCard
                post={article}
                featured={index < 3}
                variant={index % 2 === 0 ? 'purple' : 'orange'}
              />
              
              {/* Article metadata */}
              <div className="mt-4 px-2">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Load More Articles
          </button>
        </div>
      </section>

      {/* Featured Writers Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Our Writers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah Chen", specialty: "Morning Rituals & Self-Care", articles: 12 },
              { name: "Michael Rivers", specialty: "Healing & Emotional Growth", articles: 8 },
              { name: "Emma Thompson", specialty: "Creative Expression", articles: 15 }
            ].map((writer, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {writer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{writer.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{writer.specialty}</p>
                <p className="text-green-600 dark:text-green-400 text-sm">{writer.articles} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;