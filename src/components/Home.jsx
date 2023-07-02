import {React, useEffect} from 'react'
import HeroSection from '../shared/HeroSection'
import { useGlobalContext } from '../context/Context'
import Services from './Services'
import Contact from './Contact'

const Home = () => {

  const {updateHomePage} = useGlobalContext();

  useEffect(()=> updateHomePage(), [])
  
  return (<>
<HeroSection />
<Services /> 
<Contact />
</> 
)
}

export default Home