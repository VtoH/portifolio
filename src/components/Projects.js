import { Container, Row, Col,Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

const Projects = () => {
    const projects = [
        {
            title: "Vencedor da eretec2022",
            description: "Vencedor da competição de programação da eretec",
            imgUrl:  projImg1,
        },

        {
            title: "Sistema de login da eretec2022",
            description: "contruido com php e SQL",
            imgUrl:  projImg2,
        },

        {
            title: "Super Jumping mario",
            description: "jogo desenvolvido com JavaScript",
            imgUrl:  projImg3,
        },

        {
            title: "Xadrez Python",
            description: "Jogo desenvolvido com pygame",
            imgUrl:  projImg4,
        },

        {
            title: "Pokedex",
            description: "Projeto desenvolvido com JavaScript",
            imgUrl:  projImg5,
        },

        {
            title: "Em breve",
            description: "Coming soon",
            imgUrl:  projImg6,
        }

    ];

    return (
        <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Com minha base técnica em programação, habilidades em banco de dados e conhecimentos em back-end, consegui dar vida a alguns projetos dentre os que mais acho interessante de se compartilhar são: </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Em breve. | Coming Soon.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Em breve. | Coming Soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
    )  
}
export default Projects