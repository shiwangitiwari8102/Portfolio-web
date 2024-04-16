import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = ({ testimonials }) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials');
      const distanceToTop = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (distanceToTop < screenHeight * 0.75) {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container" id="testimonials" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.5s, transform 0.5s' }}>
      <h2 className="mt-5 mb-3 text-center" style={{ color: 'white', fontWeight: 'bolder' }}>Testimonials</h2>
      <h5 className=" text-center" style={{ color: 'white', fontWeight: 'bolder' }}><span>what</span> customer says</h5>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} className="col-md-4 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <div className="card" style={{border: '1px solid black', backgroundColor: '#1b2027', borderRadius:'10px 10px' }}>
              <div className="card-body text-white" style={{backgroundColor: '#1b2027'}}>
                <div className="text-center">
                  <img src={testimonial.image.url} alt={testimonial.name} style={{ height: '100px', width: '100px', borderRadius: '50%', marginBottom: '15px', display: 'inline-block' }} />
                </div>
                <h5 className="card-title text-center">{testimonial.name}</h5>
                <p className="card-text text-center">{testimonial.review}</p>
                <p className="card-text text-center" style={{ fontWeight: 'bolder' }}>{testimonial.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
