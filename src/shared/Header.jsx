import React from 'react'
import {NavLink} from 'react-router-dom'
import Nav from './Nav'
import styled from 'styled-components'
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src='./images/krimson1.png' alt='logo' className='logo'/>
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}
const MainHeader =styled.header`
padding:0 4.8rem;
height: 8rem;
background-color: ${({theme})=>theme.colors.bg};
display: flex;
justify-content: center;
align-items: center;


.logo{
   display:flex;
   justify-content:center;
   align-items:center;
   max-width:15%;
}
`;

export default Header