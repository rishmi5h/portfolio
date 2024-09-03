import { Helmet } from 'react-helmet';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import Footer from './components/Footer.tsx';
import Home from './components/Home.tsx';
import Interesting from './components/Interesting.tsx';
import Navbar from './components/Navbar.tsx';
import Projects from './components/Projects.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Helmet>
          <title>Rishabh Mishra | Portfolio</title>
          <meta
            content="Rishabh Mishra's personal portfolio showcasing web development projects and skills."
            name="description"
          />
          <meta content="index, follow" name="robots" />
          <link href="https://rishmi5h.com" rel="canonical" />
        </Helmet>
        <div className="flex min-h-screen flex-col">
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Projects />} path="/projects" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<Interesting />} path="/interesting" />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
