import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Добавляем Router
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Импортируем
import "./styles/index.css"; 
import "./styles/reset.css";
import './styles/second.css';

function App() {
  return (
    <>
      <ScrollToTop /> {/* ✅ Добавляем прокрутку вверх */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
