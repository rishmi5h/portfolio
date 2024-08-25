import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs.tsx';
import Contact from './pages/Contact.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';

const NavLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => (
  <Link
    className="relative px-3 py-2 text-gray-300 transition-colors hover:text-purple-500"
    to={to}
  >
    {children}
    <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-pink-500 transition-transform hover:scale-x-100"></span>
  </Link>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="m-6 rounded-2xl bg-black text-white">
          <nav className="container mx-auto flex items-center justify-between px-4 py-4">
            <div className="border-radius-full flex h-10 w-10 items-center justify-center rounded border border-white">
              <Link
                className="text-lg font-bold text-white hover:text-purple-500"
                to="/"
              >
                RM
              </Link>
            </div>

            <div className="flex flex-grow items-center justify-center space-x-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm">Light</span>
                <button
                  className={`h-6 w-12 rounded-full p-1 ${
                    isDarkMode ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  <div
                    className={`h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isDarkMode ? 'translate-x-6' : ''
                    }`}
                  ></div>
                </button>
                <span className="text-sm">Dark</span>
              </div>
              <button className="rounded-full bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700">
                <Link to="/contact">Contact me</Link>
              </button>
            </div>
          </nav>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Projects />} path="/projects" />
            <Route element={<Blogs />} path="/blog" />
            <Route element={<Contact />} path="/contact" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
