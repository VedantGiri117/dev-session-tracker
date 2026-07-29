import React, { useState, useEffect } from 'react';
import SessionForm from './components/SessionForm';
import SessionList from './components/SessionList';
import AuthModal from './components/AuthModal';
import { fetchSessions, createSession, deleteSession } from './services/api';

function App() {
  const [user, setUser] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // 1. Check for logged-in user on app mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (err) {
        console.error('Error parsing stored user data:', err);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // 2. Load sessions whenever a valid user is present
  useEffect(() => {
    if (user && user.token) {
      loadSessions();
    } else {
      setSessions([]);
    }
  }, [user]);

  const loadSessions = async () => {
    try {
      setLoading(true);
      const { data } = await fetchSessions();
      setSessions(data);
    } catch (err) {
      console.error('Failed to fetch sessions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSession = async (sessionData) => {
    try {
      const { data } = await createSession(sessionData);
      setSessions((prev) => [data, ...prev]);
    } catch (err) {
      console.error('Failed to create session:', err);
    }
  };

  const handleDeleteSession = async (id) => {
    try {
      await deleteSession(id);
      setSessions((prev) => prev.filter((session) => session._id !== id));
    } catch (err) {
      console.error('Failed to delete session:', err);
    }
  };

  // 3. Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setShowAuthModal(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Navigation / Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Dev Session Tracker
          </h1>

          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400">
                  Welcome, <strong className="text-slate-200">{user.name}</strong>
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg font-medium border border-red-500/30 transition-colors cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors cursor-pointer"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        {user ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <SessionForm onAddSession={handleAddSession} />
            </div>
            <div className="lg:col-span-2">
              <SessionList
                sessions={sessions}
                onDeleteSession={handleDeleteSession}
                loading={loading}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-3xl font-extrabold text-slate-100 mb-3">
              Track Your Coding Sessions Effortlessly
            </h2>
            <p className="text-slate-400 max-w-md mb-8">
              Log in to store your development time, notes, and productivity history in real time.
            </p>
            <button
              onClick={() => setShowAuthModal(true)}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/25 cursor-pointer"
            >
              Get Started / Log In
            </button>
          </div>
        )}
      </main>

      {/* Auth Modal for Login & Signup */}
      {showAuthModal && !user && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={(userData) => {
            setUser(userData);
            setShowAuthModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;