import { Title } from "../../styles/GlobalStyles";

import { SocialContainer, SociaLink, SocialWrapper } from "./style";

function Socials() {
  return (
    <SocialContainer id="Section-B">
      <Title>Redes</Title>
      <SocialWrapper>
        <SociaLink
          id="social-figma"
          target="_blank"
          href="https://www.figma.com/@leony"
        >
          Figma
        </SociaLink>
        <SociaLink
          id="social-github"
          target="_blank"
          href="https://www.github.com/LeonyLeal"
        >
          Github
        </SociaLink>
        <SociaLink
          id="social-instagram"
          target="_blank"
          href="https://www.instagram.com/leony.1999/"
        >
          Instagram
        </SociaLink>
        <SociaLink
          id="social-linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/leony-leal99/"
        >
          Linkedin
        </SociaLink>
      </SocialWrapper>
    </SocialContainer>
  );
}

export default Socials;
