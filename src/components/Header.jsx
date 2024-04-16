import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CircleX, Menu } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a href="/" className="logo">Portfolio</a>
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon"><Menu /></div>
        </button>
      </div>
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          <div className="close-icon"><CircleX /></div>
        </button>
        <motion.ul className="menu-list" variants={menuItemVariants} initial="hidden" animate={isMenuOpen ? "visible" : "hidden"}>
          <motion.li><a href="#hero">Hero</a></motion.li>
          <motion.li><a href="#about">About</a></motion.li>
          <motion.li><a href="#services">Services</a></motion.li>
          <motion.li><a href="#skills">Skills</a></motion.li>
          <motion.li><a href="#project">Project</a></motion.li>
          <motion.li><a href="#timeline">Experience & Education</a></motion.li>
          <motion.li><a href="#testimonials">Testimonial</a></motion.li>
          <motion.li><a href="#contact">Contact form</a></motion.li>
        </motion.ul>
      </div>
    </nav>
  );
}

const menuItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

export default Header;
