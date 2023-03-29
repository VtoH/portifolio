import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"; 

const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
            //o nome pode ser qualquer um, depende so de voce.
            breakpoint: {max: 4000, min: 3000 },
            items:5
        },
        Desktop: {
            breakpoint: {max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max:1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max:464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Habilidades
                            </h2>
                            <p>Minha paixão por linguagens de programação como Python e TypeScript demonstra um profundo interesse em trabalhar em projetos mais complexos. penso ser capaz de lidar com desafios e solucionar problemas complexos , graças à minha capacidade de análise crítica e pensamento estratégico. também sou capaz de trabalhar de forma independente ou em equipe, sendo um excelente colaborador e apresentando ótimas ideias para melhorar os processos de desenvolvimento de software.</p>
                            <Carousel responsive ={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )

}

export default Skills