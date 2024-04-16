
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillElements = document.querySelectorAll('.skill-card');
      skillElements.forEach((element, index) => {
        const bounding = element.getBoundingClientRect();
        if (bounding.top < window.innerHeight - 100) {
          setTimeout(() => {
            setIsVisible(prevState => ({
              ...prevState,
              [index]: true
            }));
          }, index * 100); 
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <h2 className="m-5 text-center" style={{ color: 'white', fontWeight: 'bolder' }}>Skills List</h2>
      <div className="container d-flex justify-content-center   ps-3" id="skills" style={{ backgroundColor: '#1b2027' }}>
        <div className="row">
          {data.map((skill, index) => (
            <motion.div key={index} className={`col-md-4 mb-3 skill-card ${isVisible[index] ? 'visible' : 'hidden'}`} initial="hidden" animate={isVisible[index] ? "visible" : "hidden"} style={{ visibility: 'hidden' }} variants={skillVariants}>
              <div className="card " style={{ border: 'none' }}>
                <div className="card-body" style={{ backgroundColor: '#1b2027' }}>
                  <div className='d-flex'>
                    <img src={skill.image.url} style={{ height: '50px', width: '30px', marginRight: '8px' }} alt={skill.name}></img>
                    <h5 className="card-title text-white">{skill.name}</h5>
                  </div>
                  <p className="" style={{ color: '#105343', fontWeight: 'bolder' }}>{skill.percentage}%</p>
                  <p className="card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam quidem praesentium cupiditate. </p>
                  <div className="custom-progress-bar">
                    <div className="progress-line"></div>
                    <div className="progress-marker" style={{ left: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

const skillVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default Skills;


