import { Routes, Route } from 'react-router-dom';
import Contacts from '../components/contactsPage/Contacts';
import Portfolio from '../components/portfolioPage/Portfolio';
import HomePage from '../components/homepage/HomePage';
import Skills from '../components/skillsPage/Skills';
import About from '../components/aboutPage/About';
import Blog from '../components/blog/Blogs';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
