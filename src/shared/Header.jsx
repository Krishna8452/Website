import React from 'react' 
import {NavLink} from 'react-router-dom'
import Nav from './Nav'
import styled from 'styled-components'
const Header = () => {
  return (
    <MainHeader>
        {/* <NavLink to="/">
            <img src='./images/krimson1.png' alt='logo' className='logo'/>
        </NavLink> */}
        <Nav/>
    </MainHeader>
  )
}
const MainHeader =styled.header`
padding:0 4.8rem;
height: 7rem;
background-color: ${({theme})=>theme.colors.btn};
display: flex;
justify-content: right;
align-items: center;
position: fixed;
top: 0;
width: 100%;
z-index:10;
box-shadow: 0 -6px 10px 7px ${({theme})=>theme.colors.btn};

.logo{
   display:flex;
   justify-content:center;
   align-items:center;
   max-width:15%;
}
`;

export default Header