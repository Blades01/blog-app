import React from 'react';
import PostCard from './PostCard';

const FeaturedPosts = ({ posts = [] }) => {
  // Define card variants for the grid layout
  const cardVariants = ['orange', 'purple', 'green', 'pink'];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Featured reads
        </h2>
        <p className="text-gray-600 text-lg">
          Our best weekly reads
        </p>
      </div>

      {/* Featured Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {posts.slice(0, 4).map((post, index) => (
          <PostCard
            key={post.id}
            post={post}
            featured={true}
            variant={cardVariants[index % cardVariants.length]}
          />
        ))}
      </div>

      {/* Bottom Grid for smaller posts */}
      {posts.length > 4 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.slice(4, 8).map((post, index) => (
            <PostCard
              key={post.id}
              post={post}
              featured={false}
              variant="default"
            />
          ))}
        </div>
      )}

      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          View All Featured Posts
        </button>
      </div>
    </section>
  );
};

export default FeaturedPosts;