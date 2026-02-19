import { useState, useEffect } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Add your login logic here
      console.log('Login:', { email, password });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${10 + i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-blue-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="group cursor-pointer">
              <span className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-all duration-300 transform group-hover:scale-105 inline-block">
                DocManager
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-blue-600 transition-all duration-500"></div>
            </a>
            <div className="flex gap-3">
              <a href="/signup">
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  Sign Up
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
        <div
          className={`max-w-md w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          {/* Welcome back message */}
          <div className="text-center mb-8 animate-slide-down">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Login to Your Account
            </h1>
            <p className="text-gray-600">
              Access your documents securely from anywhere
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl border border-blue-100 shadow-xl p-8 hover:shadow-2xl transition-shadow duration-500">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl animate-shake">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all duration-300 bg-white hover:border-blue-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all duration-300 bg-white hover:border-blue-300"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-all duration-300">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full relative overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Login
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
            <p className="mt-8 text-center text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-all duration-300">
                Sign up now
              </a>
            </p>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-blob {
          animation: blob 15s infinite;
        }
        
        .animate-float {
          animation: float 12s infinite ease-in-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.8s ease-out forwards;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
