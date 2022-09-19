import React from 'react';
import './heroimage.css';
import programmerImageSmall440 from '../Assets/Images/programmer-1653351_440.png';
import programmerImageSmall from '../Assets/Images/programmer-1653351_640.png';
import programmerImageMedium from '../Assets/Images/programmer-1653351_1280.png';
import programmerImageLarge from '../Assets/Images/programmer-1653351.png';
import programmerImageSmall440WebP from '../Assets/Images/programmer-1653351_440.webp';
import programmerImageSmallWebP from '../Assets/Images/programmer-1653351_640.webp';
import programmerImageMediumWebP from '../Assets/Images/programmer-1653351_1280.webp';
import programmerImageLargeWebP from '../Assets/Images/programmer-1653351.webp'

export default function HeroImage() {
  return (
    <div className='heroImageDiv'>
      <picture src={programmerImageSmall440} alt="Person Coding" >
        <source srcSet={`${programmerImageSmall440WebP} 440w, ${programmerImageSmallWebP} 640w, ${programmerImageMediumWebP} 1280w, ${programmerImageLargeWebP} 2000w`} type='image/webp' />
        <source srcSet={`${programmerImageSmall440} 440w, ${programmerImageSmall} 640w, ${programmerImageMedium} 1280w, ${programmerImageLarge} 2000w`} type='image/png' />
        <img src={programmerImageSmall440WebP} className="heroImage" alt="Person Coding"/>
      </picture>
    </div>
  )
}