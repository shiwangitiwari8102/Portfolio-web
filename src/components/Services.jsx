import React, { useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Services({ data }) {
  const carouselRef = useRef(null);
  const [hoveredIndices, setHoveredIndices] = useState(Array(data.length).fill(-1));

  const handlePrev = () => {
    carouselRef.current.prev();
    resetHoveredIndices(); 
  };

  const handleNext = () => {
    carouselRef.current.next();
    resetHoveredIndices(); 
  };

  const resetHoveredIndices = () => {
    setHoveredIndices(Array(data.length).fill(-1)); 
  };

 
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };


  const getCardsPerCarousel = () => {
    if (window.innerWidth <= 768) {
      return 1;
    } else if (window.innerWidth <= 992) {
      return 2;
    } else {
      return 3;
    }
  };

  const chunkedData = chunkArray(data, getCardsPerCarousel());

  return (
    <div style={{ overflowX: 'hidden' }} id="services">
      <h1 className='text-center m-3' style={{color:'white ',fontWeight:'bolder'}}>My Services</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <FaArrowLeft onClick={handlePrev} style={{ fontSize: '24px', cursor: 'pointer' }} />
        <Carousel ref={carouselRef} style={{ flex: '1', minWidth: '0' }}>
          {chunkedData.map((chunk, carouselIndex) => (
            <Carousel.Item key={carouselIndex}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {chunk.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    style={{
                      width: `${100 / getCardsPerCarousel()}%`,
                      height: '350px',
                      marginRight: '10px',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    onMouseEnter={() => {
                      const newHoveredIndices = [...hoveredIndices];
                      newHoveredIndices[serviceIndex + carouselIndex * getCardsPerCarousel()] = serviceIndex;
                      setHoveredIndices(newHoveredIndices);
                    }}
                    onMouseLeave={() => {
                      const newHoveredIndices = [...hoveredIndices];
                      newHoveredIndices[serviceIndex + carouselIndex * getCardsPerCarousel()] = -1;
                      setHoveredIndices(newHoveredIndices);
                    }}
                  >
                    <img
                      src={service.image.url}
                      alt={service.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {(hoveredIndices[serviceIndex + carouselIndex * getCardsPerCarousel()] === serviceIndex) && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '20px',
                          borderRadius: '5px',
                          transition: 'opacity 0.3s ease',
                          cursor: 'pointer'
                        }}
                      >
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>{service.desc}</Card.Text>
                        <Card.Text>{service.charge}</Card.Text>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <FaArrowRight onClick={handleNext} style={{ fontSize: '24px', cursor: 'pointer' }} />
      </div>
    </div>
  );
}

export default Services;
