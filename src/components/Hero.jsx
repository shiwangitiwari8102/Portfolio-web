import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Hero = ({ data }) => {
    const { name, title, description, phoneNumber, contactEmail, avatar, address } = data;

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth > 768); 
    };

    useEffect(() => {
        updateScreenSize(); 
        window.addEventListener('resize', updateScreenSize); 
        return () => window.removeEventListener('resize', updateScreenSize); 
    }, []);

    return (
        <motion.section className="home" id="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 , x:50,y:50}} transition={{ duration: 1 }}>
            <motion.div className="container p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
                <motion.div className="row align-items-center">
                    {isLargeScreen && avatar && (
                        <motion.div className="col-lg-4" initial={{ x: -100}} animate={{ x: 0 }} transition={{ delay: 0.5, duration: 1 }}>
                            <img
                                src={avatar.url}
                                alt={name}
                                style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
                            />
                        </motion.div>
                    )}
                    <motion.div className={isLargeScreen ? "col-lg-8" : "col"} initial={{ x: 100 }} animate={{ x: 0  }} transition={{ delay: 0.5, duration: 1 }}>
                        <div className="hero-info text-white">
                            <p>Welcome To my World</p>
                            <h1 className='head' style={{color:'#3fba9d'}}>{name}</h1>
                            <div className="text-animate pt-3">
                                <h2 className='text-light'> I am a {title}</h2>
                            </div>
                            <p> {description}</p>
                            <h6> Phone-number: {phoneNumber}</h6>
                            <h6> Email-id: {contactEmail}</h6>
                            <h6> Address: {address}</h6>
                            {!isLargeScreen && avatar && (
                                <div className="mt-3">
                                    <img
                                        src={avatar.url}
                                        alt={name}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                            )}
                            <div className="btn-box   mt-3">
                               <div className='d-flex'>
                                <a href="#" className="btn btn-circle" style={{ backgroundColor: '#3b5998' }}>
                                    <FaFacebook size={isLargeScreen ? "lg" : "sm"} style={{ color: 'white' }} />
                                    
                                </a>
                                <a href="#" className="btn btn-circle" style={{ backgroundColor: '#1DA1F2', marginLeft: '10px' }}>
                                    <FaTwitter size={isLargeScreen ? "lg" : "sm"} style={{ color: 'white' }} />
                                </a>
                                <a href="#" className="btn btn-circle" style={{ backgroundColor: '#e4405f', marginLeft: '10px' }}>
                                    <FaInstagram size={isLargeScreen ? "lg" : "sm"} style={{ color: 'white' }} />
                                </a>
                                <a href="#" className="btn btn-circle" style={{ backgroundColor: '#e4405f', marginLeft: '10px' }}>
                                    <FaLinkedinIn size={isLargeScreen ? "lg" : "sm"} style={{ color: 'white' }} />
                                </a>
                                </div>
                                <div>
                                <a href="" target="_blank" className="btn d-CV mt-4 " style={{ backgroundColor: '#105343', color: 'white', borderRadius: '8px', padding: '12px 24px', textDecoration: 'none', minWidth: '60px', margintop: '20px' }}>
                                    Download CV <i className='bx bx-download'></i>
                                </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default Hero;
