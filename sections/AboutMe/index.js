import { useEffect, useMemo, useState } from "react";
import Perfil from "../../public/img/Perfil.jpg";
import { Span, Text, Title } from "../../styles/GlobalStyles";
import {
  AboutMeWrapper,
  Background,
  Bubble,
  Bubbles,
  Content,
  ContentWrapper,
  Name,
  Profile,
  ProfileWrapper,
  TextWrapper,
} from "./style";
import { Carousel } from "../../components/CarouselMemo";

export default function AboutMe() {
  return (
    <ContentWrapper id="Section-A">
      <Title id="Who">Quem?</Title>
      <Background id="Background">
        <Content id="Content">
          <Name id="My_Name">Leony Leal</Name>
          <AboutMeWrapper id="About_Me_Wrapper">
            <TextWrapper id="Text_Wrapper">
              <Text id="Description">
                Desenvolvedor Front-end e Back-End e tenho como objetivo
                colocação na área como Desenvolvedor Junior. procuro adquirir
                novas habilidades para expandir o meu leque de habilidades que
                tragam retorno de valor em projetos.{" "}
              </Text>
              <Span id="Phrase">Focado em desenvolver o melhor de mim</Span>
            </TextWrapper>
            <ProfileWrapper id="DivWrapper">
              <Profile
                alt="Foto Perfil"
                src={Perfil.src}
                id="Profile_Photo"
              ></Profile>
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
