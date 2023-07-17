import {React} from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { useGlobalContext } from '../context/Context';

const HeroSection = () => {
    const {name, image, description} = useGlobalContext();
    console.log(name,'kdjfdfj')
  return (
    <Wrapper>
        <div className='container grid grid-two-column' >
            <div className="section-hero-data"  data-aos="fade-right" data-aos-duration="1000" >
                <p className='hero-top-data' >THIS IS ME</p>
                <h1 className='hero-heading'>{name}</h1>
                <p className='hero-para' >
                {description}
                </p>
                <Button className="btn">
                    <NavLink to="/contact">contact us</NavLink>
                </Button>
            </div>

            <div className='section-hero-image' data-aos="fade-left" data-aos-duration="1000">
                <picture>
                 <img src={image} alt='hero-image' className='hero-img'/>
                </picture>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top: 3rem;
padding: 9rem 0;
background-color:#e3f1fa;
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
    color:rgb(41, 95, 179);
}
.hero-heading {
    margin-top:1rem;
    text-transform:uppercase;
    color:rgb(22, 56, 107);
    font-size: 4rem;
    text-align:center;

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