import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Roast: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [roast, setRoast] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleRoastMe = async () => {
    setLoading(true);
    setError('');
    setRoast('');

    try {
      const response = await fetch('https://raas.rishmi5h.com/roast/');
      if (!response.ok) {
        throw new Error('Failed to fetch roast');
      }
      const data = await response.json();
      setRoast(data.roast || 'No roast returned');
    } catch (error_) {
      setError(
        error_ instanceof Error ? error_.message : 'An unknown error occurred',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? 'darkModeColor text-white' : 'bg-white text-black'
      } transition-colors duration-300`}
      id="roast"
    >
      <div className="flex items-center justify-center">
        <div className="mt-20 w-full max-w-2xl space-y-8 px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-7xl font-bold">🔥 ready?</h1>
            <p
              className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              If you can handle the truth, click the button below
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <button
              disabled={loading}
              className={`relative rounded-lg px-8 py-4 text-xl font-bold uppercase tracking-wide transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-600'
                  : 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-400'
              } text-white shadow-lg hover:shadow-xl`}
              onClick={handleRoastMe}
            >
              {loading ? '⏳ Getting roasted...' : '🎤 Bring It On'}
            </button>
          </div>

          {error && (
            <div
              className={`rounded-lg border-2 border-red-500 p-4 text-center ${
                isDarkMode
                  ? 'bg-red-900/20 text-red-300'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              <p className="font-semibold">Oops! {error}</p>
            </div>
          )}

          {roast && (
            <div
              className={`relative rounded-lg p-8 text-center text-lg leading-relaxed ${
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100'
                  : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'
              } shadow-lg`}
            >
              <div className="mb-4 text-4xl">💬</div>
              <p className="italic">{roast}</p>
              <button
                className={`mt-6 rounded px-4 py-2 text-sm font-semibold transition-colors ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={handleRoastMe}
              >
                {loading ? '...' : 'More Pain'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Roast;
