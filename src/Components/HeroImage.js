import React from 'react';
import './heroimage.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import programmerImageSmall440 from '../Assets/Images/programmer-1653351_440.png';
import programmerImageSmall from '../Assets/Images/programmer-1653351_640.png';
import programmerImageMedium from '../Assets/Images/programmer-1653351_1280.png';
import programmerImageLarge from '../Assets/Images/programmer-1653351.png';

export default function HeroImage() {
  return (
    <div className='heroImageDiv'>
      <LazyLoadImage src={programmerImageSmall440} className="heroImage" srcSet={`${programmerImageSmall440} 440w, ${programmerImageSmall} 640w, ${programmerImageMedium} 1280w, ${programmerImageLarge} 2000w`} alt="Person Coding" />
    </div>
  )
}