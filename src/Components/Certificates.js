import './certificates.css';
import React from 'react';
import UdacityFrontEndDeveloeprCertificate from '../Assets/Certs/Front-End-Developer-Certifcate.jpg';
import UdemyNodejsDeveloperCourse from '../Assets/Certs/Udemy-NodejsDeveloperCourse.jpg';
import UdemyReactDeveloperCourse from '../Assets/Certs/UdemyReactDeveloperCourse.jpg';
import AWSCertifiedCloudPractitionerBadge from '../Assets/aws-certified-cloud-practitioner.png';
import AWSCertifiedCloudPractitionerCertificate from '../Assets/Certs/AWS-Certified-Cloud-Practitioner-certificate-3.jpg';
import AWSCertifiedDeveloperAssociateBadge from '../Assets/aws-certified-developer-associate.png';
import AWSCertifiedDeveloperAssociateCertificate from '../Assets/Certs/AWS-Certified-Developer-Associate-certificate-2.jpg';


export default function Certificates() {
  return (
    <div>
      <h2 className='certificatesTitle' id="certificates">Certificates</h2>
      <div className='certificatesContainer'>
        <div className='certificatesDiv'>
          <img src={UdacityFrontEndDeveloeprCertificate} alt="Udacity Front End Developer Nanodegree Program Certificate" className='certificate' />
          <p><b>Udacity Front End Developer Nanodegree Program</b></p>
          <p><b>Issue Date:</b> December 31, 2019</p>
        </div>
        <div className='certificatesDiv'>
          <img src={UdemyNodejsDeveloperCourse} alt="The Complete Node.js Developer Course Certificate" className='certificate' />
          <p><b>The Complete Node.js Developer Course</b></p>
          <p><b>Issue Date:</b> January 24, 2020</p>
        </div>
        <div className='certificatesDiv'>
          <img src={UdemyReactDeveloperCourse} alt="The Complete React Developer Course Certificate" className='certificate' />
          <p><b>The Complete React Developer Course</b></p>
          <p><b>Issue Date:</b> April 18, 2020</p>
        </div>
        <div className='certificatesDiv'>
          <div className='AWSCertificateImageDiv'>
            <a href="https://www.credly.com/badges/e0aab3e3-dd16-4182-927b-8881999e8038/public_url" target="_blank" rel="noreferrer">
              <img src={AWSCertifiedCloudPractitionerBadge} alt="AWS Certified Cloud Practitioner Badge" style={{ width: "200px" }} />
            </a>
            <img src={AWSCertifiedCloudPractitionerCertificate} alt="AWS Certified Cloud Practitioner Certificate" className='certificate' />
          </div>
          <p><b>AWS Certified Cloud Practitioner</b></p>
          <p><b>Issue Date:</b> July 17, 2020</p>
        </div>
        <div className='certificatesDiv'>
          <div className='AWSCertificateImageDiv'>
            <a href="https://www.credly.com/badges/0f243595-486f-46a8-8e52-cc237d4406d9/public_url" target="_blank" rel="noreferrer">
              <img src={AWSCertifiedDeveloperAssociateBadge} alt="AWS Certified Developer Associate Badge" style={{ width: "200px" }} />
            </a>
            <img src={AWSCertifiedDeveloperAssociateCertificate} alt="AWS Certified Developer Associate Certificate" className='certificate' />
          </div>
          <p><b>AWS Certified Developer Associate</b></p>
          <p><b>Issue Date:</b> November 3, 2020</p>
        </div>
      </div>
    </div>
  )
}