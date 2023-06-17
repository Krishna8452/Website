import {React} from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { useGlobalContext } from '../context/Context';


const HeroSection = () => {
    const {name, image} = useGlobalContext();
  return (
    <Wrapper>
        <div className='container grid grid-two-column'>
            <div className="section-hero-data" data-aos="fade-up"
     data-aos-duration="3000">
                <p className='hero-top-data'>THIS IS ME</p>
                <h1 className='hero-heading'>{name}</h1>
                <p className='hero-para   data-aos= fade-right"' >
                    I'm Krishna Chaudhary. A Web Developer.
                    I'm {name} Chaudhary. A Web Developer. 
                    I'm Krishna Chaudhary. A Web Developer.
                    I'm Krishna Chaudhary. A Web Developer.
                </p>
                <Button className="btn hireme-btn">
                    <NavLink to="/contact">Contact us</NavLink>
                </Button>
            </div>
            
            <div className='section-hero-image' data-aos="fade-down"
     data-aos-duration="3000">
                <picture>
                 <img src={image} alt='hero-image' className='hero-img'/>
                </picture>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 9rem 0;

.section-hero-data{
    display:flex;
    flex-direction:column;
    justify-content:center;
}
.btn {
    max-width:15rem;
}
.hero-top-data {
    text-transform:uppercase;
    font-weight:500;
    font-size:1.5rem;
    color:${({theme})=>theme.colors.helper};
}
.hero-heading {
    text-transform:uppercase;
    font-size: 4rem;

}
.hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
}
.section-hero-image {
    display:flex;
    justify-content:center;
    align-items:center;
}
picture {
    text-align:center;

}
.hero-img {
    max-width:80%;

}
@media (max-width:${({theme})=>theme.media.mobile}) {
    .grid{
        gap:4.8rem;

    }
}

`;

export default HeroSection