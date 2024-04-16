import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Project = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectElements = document.querySelectorAll('.project-card');
      projectElements.forEach((element, index) => {
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
    <div className="container" id="project">
      <div className='m-5'style={{ color: 'white', fontWeight: 'bolder' }}>
        <h2 className="heading text-center">My Projects<br></br></h2>
        <h6 className=" text-center">Take a look at my recent projects</h6>
      </div>
      <div className="row text-white">
        {data.map((project, index) => (
          <motion.div key={index} className={`col-md-4 mb-3 project-card ${isVisible[index] ? 'visible' : 'hidden'}`} initial="hidden" animate={isVisible[index] ? "visible" : "hidden"} style={{ visibility: 'hidden' }} variants={projectVariants}>
            <div className="card   " style={{ border: '1px solid black', backgroundColor: '#1b2027', borderRadius: '20px', overflow: 'hidden' }}>
              <div className="card-body text-white" style={{ backgroundColor: '#1b2027' }}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <motion.img whileHover={{ scale: 1.1 }} style={{ height: '200px', width: 'auto' }} src={project.image.url} alt={project.title} className="img-fluid" />
                </div>
                <div className="portfolio-content">
                  <h3 className='m-4'>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.liveurl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3" style={{ backgroundColor: '#105343', color: 'white', border: 'none', padding: '10px 20px', fontWeight: 'bolder', borderRadius: '4px' }}>See Project</a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default Project;
