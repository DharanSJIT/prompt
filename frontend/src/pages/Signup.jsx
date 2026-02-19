import { useState, useEffect } from 'react';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const checkPasswordStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/[0-9]/)) strength++;
    if (pass.match(/[^a-zA-Z0-9]/)) strength++;
    setPasswordStrength(strength);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    try {
      console.log('Signup:', { email, password, fullName });
    } catch (err) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
    return colors[passwordStrength] || 'bg-gray-200';
  };

  const getPasswordStrengthText = () => {
    const texts = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    return texts[passwordStrength] || '';
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
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${12 + i * 2}s`
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
              <a href="/login">
                <button className="px-6 py-2 border-2 border-blue-200 text-blue-600 hover:border-blue-300 hover:bg-blue-50 rounded-lg transition-all duration-300">
                  Login
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
          {/* Welcome message */}
          <div className="text-center mb-8 animate-slide-down">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h1>
            <p className="text-gray-600">
              Start organizing your documents efficiently
            </p>
          </div>

          {/* Signup Card */}
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

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all duration-300 bg-white hover:border-blue-300"
                    placeholder="John Doe"
                    required
                  />
                  <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

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
                  <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
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
                    onChange={handlePasswordChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all duration-300 bg-white hover:border-blue-300"
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                  <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                {password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex gap-1 flex-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < passwordStrength ? getPasswordStrengthColor() : 'bg-gray-200'}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">
                        {getPasswordStrengthText()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-blue-600 transition-all duration-300 bg-white hover:border-blue-300 ${confirmPassword && password !== confirmPassword
                        ? 'border-red-300 bg-red-50'
                        : confirmPassword && password === confirmPassword
                          ? 'border-green-300 bg-green-50'
                          : 'border-gray-200'}`}
                    placeholder="••••••••"
                    required
                  />
                  {confirmPassword && (
                    <svg
                      className={`absolute right-3 top-3 w-5 h-5 ${password === confirmPassword ? 'text-green-500' : 'text-red-500'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {password === confirmPassword ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      )}
                    </svg>
                  )}
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                    Privacy Policy
                  </a>
                </span>
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
                    Creating account...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Sign Up
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-all duration-300">
                Login here
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
