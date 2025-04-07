import "@fontsource/roboto"; // Defaults to 400 weight
import "@fontsource/roboto/300.css"; // Light
import "@fontsource/roboto/400.css"; // Regular
import "@fontsource/roboto/500.css"; // Medium
import "@fontsource/roboto/700.css"; // Bold


import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import HomePage from './components/home_page/HomePage.jsx';
import AboutPage from './components/about_me/AboutPage.jsx';
import ProjectsPage from './components/projects/Project.jsx';
import SkillPage from './components/skills/Skills.jsx';
import ContactPage from './components/contact/Contact.jsx';
import IsNotFound from './components/IsNotFound.jsx';
import Navbar from './components/Navbar';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path='/' element={<HomePage/>}></Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/skills" element={<SkillPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='*' element={<IsNotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)