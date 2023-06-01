import React, { useEffect, useState, useRef } from 'react';
import Banner1 from '../../assets/bannercarousel1.png';
import Banner2 from '../../assets/bannercarousel2.png';
import Banner3 from '../../assets/bannercarousel3.png';
import CarouselLeftIcon from '../../assets/CarouselLeftIcon.svg';
import CarouselRightIcon from '../../assets/CarouselRightIcon.svg';

const featuredProducts = [
  Banner1,
  Banner2,
  Banner3,
]

let count = 0;
let carouselInterval: any;

function CarouselHome() {
  const carouselRef = useRef(document.createElement("div"))
  const [currentIndex, setCurrentIndex]=useState(0);
  
  const removeAnimation = () => {
    carouselRef.current.classList.remove('fade-anim');
  };

  useEffect(() => {
    carouselRef.current.addEventListener('animationend', removeAnimation);
    carouselRef.current.addEventListener('mouseenter', pauseCarousel);
    carouselRef.current.addEventListener('mouseleave', startCarousel);
    
    startCarousel();
    return () => {
      pauseCarousel();
    };
  }, []);

  const startCarousel = () => {
    carouselInterval = setInterval(() => {
      handleOnNextClick()
    }, 3000);
  }

  const pauseCarousel = () => {
    clearInterval(carouselInterval)
  }

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    carouselRef.current.classList.add('fade-anim');
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    carouselRef.current.classList.add('fade-anim');
  };
  
  return (
    <div ref={carouselRef} className="w-full select-none relative">
        <img className='scroll-smooth w-full' src={featuredProducts [currentIndex]} alt="Banner" />

      <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
        <button onClick={handleOnPrevClick}><img src={CarouselLeftIcon} alt="" /></button>
        <button onClick={handleOnNextClick}><img  src={CarouselRightIcon} alt="" /></button>
      </div>
    </div>
  );
}

export default CarouselHome;
