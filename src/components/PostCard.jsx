import React from 'react';
import { Heart, MessageCircle, BookOpen, Calendar } from 'lucide-react';

const PostCard = ({ post, featured = false, variant = 'default' }) => {
  // Different card variants based on the design
  const getCardClasses = () => {
    switch (variant) {
      case 'orange':
        return 'bg-gradient-to-br from-orange-400 to-orange-500 text-white';
      case 'purple':
        return 'bg-gradient-to-br from-purple-400 to-purple-500 text-white';
      case 'green':
        return 'bg-gradient-to-br from-green-400 to-green-500 text-white';
      case 'pink':
        return 'bg-gradient-to-br from-pink-400 to-pink-500 text-white';
      default:
        return 'bg-white text-gray-800';
    }
  };

  const getButtonClasses = () => {
    if (variant === 'default') {
      return 'bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white';
    }
    return 'bg-white/20 hover:bg-white/30 text-white border border-white/30';
  };

  return (
    <div className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
      featured ? 'h-96' : 'h-80'
    } ${getCardClasses()}`}>
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.imageUrl || "/api/placeholder/400/300"} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Category badge */}
        {post.category && (
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
              {post.category.name}
            </span>
          </div>
        )}

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 bg-yellow-400 text-gray-800 text-sm font-medium rounded-full flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between h-48">
        <div>
          <h3 className={`font-bold text-xl mb-3 leading-tight ${
            variant === 'default' ? 'text-gray-800' : 'text-white'
          }`}>
            {post.title}
          </h3>
          
          <p className={`text-sm mb-4 line-clamp-3 leading-relaxed ${
            variant === 'default' ? 'text-gray-600' : 'text-white/90'
          }`}>
            {post.content}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className={`px-2 py-1 text-xs rounded-full ${
                    variant === 'default' 
                      ? 'bg-gray-100 text-gray-600' 
                      : 'bg-white/20 text-white'
                  }`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Engagement metrics */}
            <div className="flex items-center gap-1">
              <Heart className={`w-4 h-4 ${variant === 'default' ? 'text-gray-400' : 'text-white/70'}`} />
              <span className={`text-sm ${variant === 'default' ? 'text-gray-500' : 'text-white/70'}`}>
                {post.likes || 0}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className={`w-4 h-4 ${variant === 'default' ? 'text-gray-400' : 'text-white/70'}`} />
              <span className={`text-sm ${variant === 'default' ? 'text-gray-500' : 'text-white/70'}`}>
                {post.comments || 0}
              </span>
            </div>
          </div>

          <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${getButtonClasses()}`}>
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;