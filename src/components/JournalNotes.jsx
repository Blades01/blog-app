import React from 'react';
import { BookOpen, Flower, Heart, Sparkles } from 'lucide-react';

const JournalNotes = () => {
  const notes = [
    {
      id: 1,
      color: 'bg-gradient-to-br from-green-200 to-green-300',
      icon: <Flower className="w-6 h-6 text-green-600" />,
      title: "Healing Thoughts",
      content: "But in the midst of these highs, there's a hidden strength, fighting against anxiety."
    },
    {
      id: 2,
      color: 'bg-gradient-to-br from-orange-200 to-orange-300',
      icon: <Heart className="w-6 h-6 text-orange-600" />,
      title: "Gentle Reminders",
      content: "But in the midst of these highs, there's a hidden strength, fighting against anxiety."
    },
    {
      id: 3,
      color: 'bg-gradient-to-br from-purple-200 to-purple-300',
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      title: "Daily Reflections",
      content: "But in the midst of these highs, there's a hidden strength, fighting against anxiety."
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Journal Notes Header */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-indigo-500" />
              <h2 className="text-2xl font-bold text-gray-800">
                Notes from the Writer's journal
              </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              These are unfiltered thoughts from the writer — honest moments, 
              gentle reminders, and everyday reflections. Short notes that speak 
              to where you are, when you need them most.
            </p>

            <div className="space-y-4">
              {/* Small decorative elements */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-500">Healing moments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-gray-500">Daily wisdom</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-500">Gentle reminders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Journal Notes Cards */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notes.map((note) => (
              <div 
                key={note.id}
                className={`${note.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {note.icon}
                  <h3 className="font-semibold text-gray-800">
                    {note.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {note.content}
                </p>

                <div className="flex justify-end">
                  <button className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalNotes;