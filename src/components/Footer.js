import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">

                    <Col sm={3}>
                        <img src={logo} alt="Logo" className="footer-logo-img"/>
                    </Col>
                    
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon-footer">
                            <a href="https://www.linkedin.com/in/victor-hugo-166a4226a/">
                                <img src={navIcon1}/>
                            </a>
                            <a href="https://github.com/VtoH">
                                <img src={navIcon2}/>
                            </a>
                            <a href="https://www.instagram.com/evitoovito/">
                                <img src={navIcon3}/>
                            </a>
                        </div>
                        <p className="rights">Allrightsreserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer