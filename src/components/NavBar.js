
import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

 const NavBar = () => {
    const [activeLink, setActiveLink] = useState ('home');
    const [scrolled, seScolled] = useState (false);

    useEffect (() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                seScolled(true);
            } else {
                seScolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar  expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt = "Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" > 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                    <Nav.Link href="#project" className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projetos</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/victor-hugo-166a4226a/"><img src={navIcon1} alt="lin"/></a>
                        <a href="https://github.com/VtoH"><img src={navIcon2} alt="gith"/></a>
                        <a href="https://www.instagram.com/evitoovito/"><img src={navIcon3} alt="ins"/></a>
                    </div>
                    <button className="vdd" onClick={() => console.log('connect')}><span>Vamos conectar?</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar