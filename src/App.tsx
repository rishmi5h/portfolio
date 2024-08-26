import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import Home from './components/Home.tsx';
import Navbar from './components/Navbar.tsx';
import Projects from './components/Projects.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
