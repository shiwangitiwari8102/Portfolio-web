import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AboutMe = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div className="about-content" id="about" initial={{ opacity: 0, y: 20 }} animate={isVisible ? "visible" : "hidden"} variants={containerVariants}>
            <h2 className="heading mt-5 mb-4" style={styles.heading}>About Me</h2>
            <div className="about-container align-items-center" style={styles.container}>
                <div className="d-md-flex align-items-center">
                    <div className="text-center" style={{ flex: '1 1 50%' }}>
                        <img src={data.avatar.url} style={styles.avatar} alt="Avatar" />
                    </div>
                    <div className="" style={{ flex: '1 1 50%' }}>
                        <h3 style={styles.subheading}>{data.name}</h3>
                        <p className="" style={styles.subTitle}>{data.subTitle}</p>
                        <div className="content-btn">
                            <div className="content">
                                <div className="text-box">
                                    <span style={styles.description}>{data.description}</span>
                                </div>
                                <div className="text-box">
                                    <p style={styles.skillTitle}>Experience: {data.exp_year} years</p>
                                    <span style={styles.description}>{data.quote}</span>
                                </div>
                                <div>
                                    <a href='#contact' className='btn mt-4' style={{ backgroundColor: '#105343', color: 'white', borderRadius: '8px', padding: '12px 24px', textDecoration: 'none', minWidth: '60px', margintop: '25px' }}>Contact me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const styles = {
    container: {
        backgroundColor: '#1b2027',
        color: 'white',
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '80vw',
        margin: '0 auto',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: '24px',
        marginBottom: '10px',
        textAlign: 'center',
        color:'white',
    },
    subheading: {
        fontWeight: 'bold',
        color:'white',
        fontSize: '20px',
        marginBottom: '15px',
    },
    subTitle: {
        marginBottom: '5px',
    },
    description: {
        color:'white',
        fontSize: '14px',
    },
    avatar: {
        height: '300px',
        width: '200px',
        border:'10px solid #105343'
    },
   
};

export default AboutMe;
