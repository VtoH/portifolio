import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front-End", "Back-end", "Banco de dados"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(()=> {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return() => { clearInterval(ticker)};
    }, [text])

    const tick =() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);

        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem vindo ao meu portifolio</span>
                        <h1>{'Ola me chamo Victor e eu trabalho com '}<span className="wrap">{text}</span></h1>
                        <p>Eu sou um estudante do terceiro ano de informática com forte interesse em desenvolvimento de banco de dados e back-end. estou sempre em busca de novas oportunidades para aprimorar minhas habilidades técnicas e expandir meus conhecimento.também possuo habilidades em desenvolvimento front-end, o que me torna um profissional versátil e valioso em projetos multidisciplinares.</p>
                        <button onClick={() => console.log('connect')}>Vamos conectar?<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner