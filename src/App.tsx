import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Blogs from './components/Blogs.tsx';
import Contact from './components/Contact.tsx';
import Home from './components/Home.tsx';
import Navbar from './components/Navbar';
import Projects from './components/Projects.tsx';
import { darkModeColor } from './constants/colors.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* <div className={`min-h-screen bg-inherit transition-colors`}> */}
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Blogs />} path="/blog" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
        {/* </div> */}
      </Router>
    </ThemeProvider>
  );
}
