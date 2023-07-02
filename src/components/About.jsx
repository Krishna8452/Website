import {React, useEffect} from 'react'
import HeroSection from '../shared/HeroSection'
import { useGlobalContext } from '../context/Context';


const About = () => {

 const {updateAboutPage} = useGlobalContext();

  useEffect(()=> updateAboutPage(), []);

  return (
    <HeroSection />
  )
}

export default About