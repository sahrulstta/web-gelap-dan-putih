import styled from 'styled-components'
import { Container } from "../GlobalStyled";
import {Link} from 'react-router-dom'
import {ReactLogo} from '@styled-icons/fa-brands'
import {MoonStars} from '@styled-icons/bootstrap/MoonStars'



export const Nav = styled.nav`
    background: linear-gradient(90deg, rgba(220,150,231,1) 0%,  rgba(50,181,244,1) 100%);
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.2rem;
    position:sticky;
    top:0;
    border-radius:40px;
    z-index:999;
`

export const NavContainer =styled(Container)`
    display:flex;
    justify-content: space-between;
    height: 80px;
    ${Container};
`
export const NavLogo = styled(Link)`
    color:white;
    justify-self:flex-start;
    cursor: pointer;
    text-decoration:none;
    font-size:2rem;
    display:flex;
    align-items:center;
`
export const NavIcon = styled(ReactLogo)`
    margin-right:0.5rem;
`
export const MobileIcon =styled.div`
    display:none;
    @media  screen and (max-width: 960px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%, 60%);
        font-size:1.8rem;
        cursor:pointer;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    @media screen and (max-width:960px){
        display: flex;
        flex-direction:column;
        width:50%;
        height:90vh;
        position: absolute;
        top:80px;
        left:${({click})=>(click ? 0 : '-100%')};
        opacity:1;
        transition:all 0.5s ease;
        background: #ecaaf7;
    }
`
export const NavItem = styled.li`
    height:80px;
    border-bottom: 2px solid transparent;
    &:hover{
        border-bottom:2px solid #fff;
    }
    @media screen and(max-width:960px){
        width:100%;
        &:hover{
            border:none;
        }
    }
`
export const NavLink = styled(Link)`
    color:white;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0.5rem 1rem;
    height:100%;
    @media screen and (max-width: 960px){
        text-align:center;
        padding:2rem;
        width:100%;
        display:table;
        &:hover{
            color:black;
            transition:all 0.3s ease; 
        }
    }
`
export const NavButton = styled.li`
    @media screen and (max-width: 960px){
        display: flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:120px;
    }
`

export const BtnLink = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    padding:8px 16px;
    height:100%;
    width:100%;
    border:none;
`
export const Times = styled(MoonStars)`
color:black;
width: 25px;
`

