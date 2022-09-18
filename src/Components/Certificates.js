import React from 'react';
import UdacityFrontEndDeveloeprCertificate from '../Assets/Front-End-Developer-Certifcate.jpg';
import UdemyNodejsDeveloperCourse from '../Assets/Udemy-NodejsDeveloperCourse.jpg';
import UdemyReactDeveloperCourse from '../Assets/UdemyReactDeveloperCourse.jpg';


export default function Certificates() {
  return (
    <div>
      <img src={UdacityFrontEndDeveloeprCertificate} alt="Udacity Front End Developer Nanodegree Program Certificate" />
      <img src={UdemyNodejsDeveloperCourse} alt="The Complete Node.js Developer Course Certificate" />
      <img src={UdemyReactDeveloperCourse} alt="The Complete React Developer Course Certificate" />
    </div>
  )
}