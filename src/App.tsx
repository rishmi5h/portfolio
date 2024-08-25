import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs.tsx';
import Contact from './pages/Contact.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';

const NavLink = (props: JSX.IntrinsicElements['a'] & { to: string }) => (
  <Link
    className="text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
    {...props}
  />
);

export default function App() {
  return (
    <Router>
      <div className="mx-auto my-8 mt-10 w-8/12">
        <nav className="mb-6 flex justify-between">
          <h1 className="text-2xl font-bold">
            <NavLink to="/">rishmi5h</NavLink>
          </h1>
          <div className="space-x-10">
            <NavLink to="/">home</NavLink>
            <NavLink to="/projects">projects</NavLink>
            <NavLink to="/blogs">blogs</NavLink>
            <NavLink to="/contact">contact</NavLink>
          </div>
        </nav>

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Blogs />} path="/blogs" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </div>
    </Router>
  );
}
