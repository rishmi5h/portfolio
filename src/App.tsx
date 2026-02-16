import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './components/Contact.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import { useKonamiCode } from './components/EasterEggs.tsx';
import Footer from './components/Footer.tsx';
import Interesting from './components/Interesting.tsx';
import Navbar from './components/Navbar.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Roast from './pages/Roast.tsx';
import Skills from './pages/Skills.tsx';

export default function App() {
  const konamiCodeSuccess = useKonamiCode();
  const [scrollSnapEnabled, setScrollSnapEnabled] = React.useState(false);

  React.useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Keep scroll snap disabled initially
    document.documentElement.style.scrollSnapType = 'none';
    document.documentElement.style.scrollBehavior = 'smooth';

    // Enable scroll snap on first user scroll
    const handleScroll = () => {
      if (!scrollSnapEnabled) {
        document.documentElement.style.scrollSnapType = 'y proximity';
        setScrollSnapEnabled(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollSnapEnabled]);

  return (
    <ThemeProvider>
      <Router>
        {konamiCodeSuccess && (
          <div className="fixed left-0 top-0 z-50 w-full bg-green-500 py-2 text-center text-white">
            Congratulations! You&apos;ve unlocked the Konami code!
          </div>
        )}
        <Helmet>
          <title>Rishabh Mishra | Portfolio</title>
          <meta
            content="Rishabh Mishra's personal portfolio showcasing web development projects and skills."
            name="description"
          />
          <meta content="index, follow" name="robots" />
          <link href="https://rishmi5h.com" rel="canonical" />
          <link
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
            rel="icon"
          />
        </Helmet>
        <div className="flex min-h-screen flex-col">
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/roast" element={<Roast />} />
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Skills />
                    <Projects />
                  </>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
