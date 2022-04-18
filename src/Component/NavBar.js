import React, {useState, useEffect} from 'react'
import {Nav, NavContainer, NavLogo, NavIcon, NavMenu, NavItem,NavLink,  Times} from './NavbarElement'
import {ThemeProvider} from "styled-components"
import {darkMode, lightMode, Globalstyle} from "../GlobalStyled"

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const showButton = () =>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }


    //Dark Mode
    const [theme, setTheme] = useState("dark");

    const themeToggler = () =>{
        theme === "light" ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
        <ThemeProvider theme={theme === 'light' ? darkMode : lightMode}>
            <Globalstyle/>
        <Nav>
            <NavContainer>
                <NavLogo to='/Home'>
                    <NavIcon />
                    React JS
                </NavLogo>
                

                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLink to='/'>Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='/'>About Me</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='/'>Product</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='/'>Contact</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink to='/'><Times onClick={() => themeToggler()}/></NavLink>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
        </ThemeProvider>

        </>
    )
}

export default NavBar