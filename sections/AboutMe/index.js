import { Span, Text, Title } from "../../styles/GlobalStyles";
import {
  AboutMeWrapper,
  Background,
  Bubble,
  Bubbles,
  Content,
  ContentWrapper,
  Name,
  ProfileWrapper,
  Profile,
  TextWrapper,
} from "./style";
import { Carousel } from "../../components/CarouselMemo";


export default function AboutMe({ yearsExperience, command,  profile }) {
  return (
    <ContentWrapper id="Section-A">
      <Title id="Who">Sobre mim</Title>
      <Background id="Background">
        <Content id="Content">
          <Name id="My_Name">Leony Leal</Name>
          <AboutMeWrapper id="About_Me_Wrapper">
            <TextWrapper id="Text_Wrapper">
              <Text id="Description">
                  Atuo no mercado de trabalho com desenvolvimento de software <strong>há {yearsExperience}  anos</strong>, e estudando desde 2018.
                  Tenho experiência no desenvolvimento de sistemas distribuídos,
                  envolvendo front-end, back-end, testes e infraestrutura.
                  Trabalho com arquiteturas monolíticas e orientadas a serviços,
                  incluindo microsserviços.
                  Tenho experiência com arquiteturas como <em>Ports and Adapters</em> e <em>MVVM</em>, garantindo
                  clareza e manutenibilidade dos sistemas.
                  Experiência em automação de ambientes,
                  containerização com <strong>Docker</strong> e pipelines de <strong>CI/CD</strong>.
              </Text>
              <Span id="Phrase">
                {command}
              </Span>
            </TextWrapper>
            <ProfileWrapper id="DivWrapper">
              <Profile
                alt="Foto Perfil"
                src={profile.avatar_url}
                id="Profile_Photo"
              />
              <Carousel />
            </ProfileWrapper>
          </AboutMeWrapper>
        </Content>
        <Bubbles id="Bubbles">
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
          <Bubble id="Bubble" />
        </Bubbles>
      </Background>
    </ContentWrapper>
  );
}
  

