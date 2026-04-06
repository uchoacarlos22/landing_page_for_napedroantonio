import styled from "styled-components";
import { colors } from "../theme";
import Projects from "./Projects";

// ====== Estilos da seção ======
const Section = styled.section`
  color: ${colors.background};
  position: relative;
  padding: 30px 35px;
  background-image: url("src/assets/images/carousel_background.jpg");
`;

const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TextCard = styled.div`
  background: ${colors.primary};
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 35px rgba(255, 192, 0, 0.35);
  }

  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const Subtitle = styled.h3`
  color: ${colors.secondary};
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 18px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #e8e8e8;
  line-height: 1.8;
`;

export default function ProjectsWrapper() {
  return (
    <Section>
      <Container>
        <Grid>
          <TextCard>
            <Subtitle>Construção e Reformas</Subtitle>
            <Description>
              Transformamos ideias em realidade há mais de 15 anos, oferecendo
              soluções completas em obras, reformas e renovações. Garantimos
              qualidade excepcional, pontualidade e atendimento totalmente
              personalizado.
            </Description>
          </TextCard>

          <Projects />
        </Grid>
      </Container>
    </Section>
  );
}
