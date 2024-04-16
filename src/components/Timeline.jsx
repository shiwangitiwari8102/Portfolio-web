import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ data }) => {
    const [showEducationItems, setShowEducationItems] = useState([]);
    const [showExperienceItems, setShowExperienceItems] = useState([]);

    const toggleEducationItem = (index) => {
        setShowEducationItems(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const toggleExperienceItem = (index) => {
        setShowExperienceItems(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const timelineSection = document.getElementById('timeline');
            if (timelineSection) {
                const position = timelineSection.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (position < windowHeight * 0.8) {
                    // Trigger animation when timeline section is 80% visible
                    setShowEducationItems(Array(educationData.length).fill(false));
                    setShowExperienceItems(Array(experienceData.length).fill(false));
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const educationData = data.filter(job => job.forEducation);
    const experienceData = data.filter(job => !job.forEducation);

    return (
        <section className="timeline text-white  " id="timeline" style={{ backgroundColor: '#1b2027', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="container mt-5 p-3 ">
                <div className="main-text text-center mb-5">
                    <h2 className="heading" style={{ color: '#105343', fontWeight: 'bolder' }}>RESUME</h2>
                    <span>My journey</span>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h3 className='text-center'>Education</h3>
                        <hr></hr>
                        {educationData.map((job, index) => (
                            <motion.div key={job._id} className="m-3 bg-transparent" style={{ padding: '20px' }}>
                                <h4>{job.company_name}</h4>
                                <p>{job.jobTitle}</p>
                                <p>{job.startDate} - {job.endDate}</p>
                                <ul>
                                    {showEducationItems[index] && job.bulletPoints.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                <motion.button  className ='p-2' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => toggleEducationItem(index)} style={{ fontSize: '24px', cursor: 'pointer',  borderRadius:'10px', padding:'3px',backgroundColor: '#105343', color: 'white' , border:'none'}}>
                                    {showEducationItems[index] ? '-' : '+'}
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                    <div className="col-md-6">
                        <h3 className='text-center'>Experience</h3>
                        <div>
                            <hr></hr>
                        </div>
                        {experienceData.map((job, index) => (
                            <motion.div key={job._id} className="m-3 bg-transparent" style={{ padding: '20px' }}>
                                <h4>{job.company_name}</h4>
                                <p>{job.jobTitle}</p>
                                <p>{job.startDate} - {job.endDate}</p>
                                <ul>
                                    {showExperienceItems[index] && job.bulletPoints.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                <motion.button  className ='p-2'whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => toggleExperienceItem(index)} style={{ fontSize: '24px', cursor: 'pointer',  borderRadius:'10px', backgroundColor: '#105343', color: 'white' , border:'none'}}>
                                    {showExperienceItems[index] ? '-' : '+'}
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
