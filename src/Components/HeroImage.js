import React from 'react';
import './heroimage.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import programmerImage200 from '../Assets/Images/programmer-1653351_200.png';
// import programmerImage300 from '../Assets/Images/programmer-1653351_300.png';
// import programmerImage390 from '../Assets/Images/programmer-1653351_390.png';
// import programmerImageSmall440 from '../Assets/Images/programmer-1653351_440.png';
// import programmerImageSmall from '../Assets/Images/programmer-1653351_640.png';
// import programmerImageMedium from '../Assets/Images/programmer-1653351_1280.png';
// import programmerImageLarge from '../Assets/Images/programmer-1653351.png';
// import programmerImage200WebP from '../Assets/Images/programmer-1653351_200.webp';
// import programmerImage300WebP from '../Assets/Images/programmer-1653351_300.webp';
// import programmerImage390WebP from '../Assets/Images/programmer-1653351_390.webp';
// import programmerImageSmall440WebP from '../Assets/Images/programmer-1653351_440.webp';
// import programmerImageSmallWebP from '../Assets/Images/programmer-1653351_640.webp';
// import programmerImageMediumWebP from '../Assets/Images/programmer-1653351_1280.webp';
// import programmerImageLargeWebP from '../Assets/Images/programmer-1653351.webp'

export default function HeroImage() {
  return (
    <div className='heroImageDiv'>
      <picture>
        <LazyLoadImage src="https://ik.imagekit.io/yd6vq5yhz/programmer-1653351_1280_qpj6A3b6p.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663878878279" width='auto' height="auto" className="heroImage" alt="Person Coding"/>
      </picture>
    </div>
  )
}