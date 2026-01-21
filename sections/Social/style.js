import styled from "styled-components";

export const SocialContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SocialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap:10px;
  @media (min-width: 250px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SociaLink = styled.a`
  padding: 0 2em;
  width: 40px;
  height: 30px;
  cursor: pointer;
  background-position: start center;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1rem;
  font-weight: 600;
  margin: 0.3em .2em;
  user-select: none;
  -webkit-user-drag:none;
  :hover{
    transition: all 0.5s ease-in-out;
  }

  @media (min-width: 400px){
    font-size: 1.2rem;
    margin: 0.3em 1em;
  }

  &:nth-child(1) {
    background-image: url(${(props) => props.theme.social.fg.src});
    :hover {
      background-image: url(${(props) => props.theme.social.fg_fill.src});
    }
  }
  &:nth-child(2) {
    background-image: url(${(props) => props.theme.social.gh.src});
    :hover {
      background-image: url(${(props) => props.theme.social.gh_fill.src});
    }
  }
  &:nth-child(3) {
    background-image: url(${(props) => props.theme.social.ins.src});
    :hover {
      background-image: url(${(props) => props.theme.social.ins_fill.src});
    }
  }
  &:nth-child(4) {
    background-image: url(${(props) => props.theme.social.in.src});
    :hover {
      background-image: url(${(props) => props.theme.social.in_fill.src});
    }
  }
`;
