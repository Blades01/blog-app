import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedPosts from './components/FeaturedPosts';
import LatestArticles from './components/LatestArticles';
import JournalNotes from './components/JournalNotes';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import AboutPage from './components/AboutPage';
import ArticlesPage from './components/ArticlesPage';
import CommunityPage from './components/CommunityPage';
import StoriesPage from './components/StoriesPage';
import './App.css';

// Home Page Component (your current main content)
const HomePage = ({ posts, searchResults, handleSearch }) => (
  <>
    <HeroSection />
    {searchResults.length > 0 ? (
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Search Results</h2>
        <FeaturedPosts posts={searchResults} />
      </section>
    ) : (
      <>
        <FeaturedPosts posts={posts} />
        <JournalNotes />
        <LatestArticles posts={posts} />
        <Newsletter />
      </>
    )}
  </>
);

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://blog-back-production-7906.up.railway.app/api/posts');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    const token = localStorage.getItem('token');
    if (token) {
      setCurrentUser({ name: 'LoggedInUser' }); // Replace with actual fetch/decode later
    }
  }, []);

  const handleLoginClick = () => setShowLogin(true);
  const handleSignupClick = () => setShowSignup(true);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
  };
  const handleSearch = (term) => {
    if (!term.trim()) return setSearchResults([]);
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(term.toLowerCase()) ||
      post.content.toLowerCase().includes(term.toLowerCase()) ||
      post.category?.name?.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filtered);
  };
  const handleLoginSuccess = (user) => setCurrentUser(user);
  const handleSignupSuccess = (user) => setCurrentUser(user);

  return (
    <ThemeProvider>
      <Router>
        {loading ? (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-green-200 border-t-green-500 dark:border-green-400 dark:border-t-green-300 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300">Loading peaceful content...</p>
            </div>
          </div>
        ) : error ? (
          <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 dark:bg-red-900 text-red-700 p-8">
            <p className="mb-4 text-xl">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <Header
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              onLogin={handleLoginClick}
              onSignup={handleSignupClick}
              onLogout={handleLogout}
              onSearch={handleSearch}
            />

            {showLogin && (
              <LoginForm
                onClose={() => setShowLogin(false)}
                onLoginSuccess={handleLoginSuccess}
              />
            )}
            {showSignup && (
              <SignupForm
                onClose={() => setShowSignup(false)}
                onSignupSuccess={handleSignupSuccess}
              />
            )}

            <main>
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <HomePage 
                      posts={posts} 
                      searchResults={searchResults} 
                      handleSearch={handleSearch} 
                    />
                  } 
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/stories" element={<StoriesPage />} />
                <Route path="/community" element={<CommunityPage />} />
              </Routes>
            </main>

            <Footer />
          </div>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;