import React, { useState } from 'react';
import { Mail, Send, Check, X } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    try {
      // Simulate API call - replace with actual backend call
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Stay connected to our new writings and quiet notes
            </h2>
          </div>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Get gentle reminders, healing thoughts, and new articles delivered 
            to your inbox. No spam, just peace and inspiration when you need it most.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent text-gray-700 placeholder-gray-400"
                disabled={status === 'loading'}
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 disabled:from-gray-300 disabled:to-gray-400 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2 min-w-[140px]"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Subscribe
                </>
              )}
            </button>
          </form>

          {/* Status Messages */}
          {message && (
            <div className={`flex items-center justify-center gap-2 p-4 rounded-lg ${
              status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {status === 'success' ? (
                <Check className="w-5 h-5" />
              ) : (
                <X className="w-5 h-5" />
              )}
              <span>{message}</span>
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-sm text-gray-500 mt-6">
            We respect your privacy. Unsubscribe at any time. 
            <br />
            No spam, just healing words when you need them.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">2.5K+</div>
              <div className="text-sm text-gray-600">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">Weekly</div>
              <div className="text-sm text-gray-600">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">0</div>
              <div className="text-sm text-gray-600">Spam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;