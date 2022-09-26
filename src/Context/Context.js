import React, { createContext, useState, useEffect } from 'react';
import WineRecommendationImage from '../Assets/Projects/tinified/wine-recommendations-square-version-2.jpg';
import MoodyCreatureSociety from '../Assets/Projects/tinified/moody-creature-society.jpg';
import PokemonIndex from '../Assets/Projects/tinified/pokemon-index.jpg';
import DesignoMultiPageWebsite from '../Assets/Projects/tinified/designo-multi-page-website.jpg';

const PortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {
  const isDarkMode = () => {
    let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return darkMode ? 'dark' : 'light';
  }
  const [theme, setTheme] = useState(isDarkMode());
  const [contactName, setContactName] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [contactPhoneNumber, setContactPhoneNumber] = useState();
  const [contactMessage, setContactMessage] = useState();
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertText, setAlertText] = useState('');

  const projects = [
    {
      img: WineRecommendationImage,
      title: 'Wine Recommendations',
      url: 'https://gilmore-wine-recommendations-v2.netlify.app/',
      link: '/wine-recommendations'
    }, 
    {
      img: MoodyCreatureSociety,
      title: 'Moody Creature Society',
      url: 'https://moody-creature-society.netlify.app/',
      link: '/moody-creature-society'
    },
    {
      img: PokemonIndex,
      title: 'Pokémon Index',
      url: 'https://gilmore-pokemon-index.netlify.app/',
      link: '/pokemon-index'
    },
    {
      img: DesignoMultiPageWebsite,
      title: 'Designo Multi-Page Website',
      url: 'https://gilmore-designo.netlify.app/',
      link: '/designo-multi-page-website'
    }
  ]

  const handleThemeChange = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const handeContactNameChange = (e) => setContactName(e.target.value);

  const handeContactEmailChange = (e) => setContactEmail(e.target.value);

  const handeContactPhoneNumberChange = (e) => setContactPhoneNumber(e.target.value);

  const handeContactMessageChange = (e) => setContactMessage(e.target.value);

  const handleDownloadResume = (e) => {
    e.preventDefault();
    window.open("./Resume.pdf","_blank");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    const endpoint = process.env.REACT_APP_AWS_API;
    const body = JSON.stringify({
      name: contactName,
      email: contactEmail,
      phone: contactPhoneNumber,
      message: contactMessage
    });
    const requestOptions = {
      method: "POST",
      body
    }
    
    fetch(endpoint, requestOptions)
      .then((respone) => {
        if (!respone.ok) {
          setAlertText('Error message has not been sent!');
          setAlertSeverity('error');
          setOpen(true);
          throw new Error("Error in fetch");
        }
        setAlertText('Success message has been sent!');
        setAlertSeverity('success');
        setOpen(true);
        return respone.json();
      })
      .then((response) => {
        if (response.ok) {
          setAlertSeverity('success');
          setOpen(true);
          console.log("success");
        }
      })
      .catch((error) => {
        if (error) {
          // setAlertSeverity('error');
          // setOpen(true);
          console.log("error");
        }
      })
 }

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? "dark" : "light";
        setTheme(colorScheme);
      });
  }, []);

  const value = {
    theme, 
    setTheme,
    contactName,
    setContactName,
    contactEmail,
    setContactEmail,
    contactPhoneNumber,
    setContactPhoneNumber,
    contactMessage,
    setContactMessage,
    projects,
    handleThemeChange,
    handleDownloadResume,
    handeContactNameChange,
    handeContactEmailChange,
    handeContactPhoneNumberChange,
    handeContactMessageChange,
    handleSubmit,
    open, 
    setOpen,
    alertSeverity,
    setAlertSeverity,
    alertText, 
    setAlertText
  }
  return (
    <PortfolioContext.Provider value={value} >
      {children}
    </PortfolioContext.Provider>
  )
}
export { PortfolioContextProvider, PortfolioContext };