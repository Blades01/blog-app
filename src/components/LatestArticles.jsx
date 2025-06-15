import React from 'react';
import PostCard from './PostCard';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

const LatestArticles = ({ posts = [] }) => {
  const cardVariants = ['orange', 'purple'];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-8 h-8 text-green-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest articles
          </h2>
        </div>
        <p className="text-gray-600 text-lg">
          Our best weekly reads
        </p>
      </div>

      {/* Latest Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {posts.slice(0, 2).map((post, index) => (
          <div key={post.id} className="group">
            <PostCard
              post={post}
              featured={true}
              variant={cardVariants[index % cardVariants.length]}
            />
          </div>
        ))}
      </div>

      {/* Recent Posts List */}
      {posts.length > 2 && (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-gray-500" />
            <h3 className="text-xl font-semibold text-gray-800">Recent Posts</h3>
          </div>
          
          <div className="space-y-4">
            {posts.slice(2, 8).map((post, index) => (
              <div 
                key={post.id}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex-shrink-0">
                  <img 
                    src={post.imageUrl || "/api/placeholder/80/80"} 
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    {post.category && (
                      <span className="text-xs text-green-600 font-medium">
                        {post.category.name}
                      </span>
                    )}
                    <span className="text-xs text-gray-400">
                      {post.readTime || '5 min read'}
                    </span>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Load More Button */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
          Load More Articles
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default LatestArticles;