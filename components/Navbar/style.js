import styled from "styled-components";

export const Nav = styled.nav`
  visibility: hidden;
  background-size: contain;
  background: url(${(props) => props.theme.backgroundM.src}) no-repeat center bottom,
    ${(props) => props.theme.colors.primary};
  user-select: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @keyframes outIn {
    0% {
      opacity: 0;
      background: ${(props) => props.theme.colors.primary};
      transform: translate(0%, -200%);
    }
    100% {
      opacity: 1;
      background-size: contain;
      transform: translate(0%, 0%);
    }
  }
  @keyframes inOut {
    0% {
      transform: translate(0%, -200%);
    }
    75% {
      visibility: hidden;
      background-color: transparent;
      transform: translate(0%, -100%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }

  @media (min-width: 600px) {
    visibility: hidden !important;
    background: transparent;
    top: 0em;
    height: 44px;
  }
`;
export const Menu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-wrap: wrap;
  min-height: 2.75em;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  justify-items: center;

  @media (min-width: 600px) {
    visibility: visible;
    min-height: 3.7em;
    flex-direction: row;
    margin:0 0;
    padding:0;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: start;
    justify-items: center;
    background: rgba(0, 0, 0, 0.09);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(0, 0, 0, 0.5),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 8px 4px rgba(0, 0, 0, 0.4);
  }
`;
export const MenuLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  -webkit-user-drag:none;
  @media (min-width: 600px) {
    padding: 0 1em;
    font-size: 1.4rem;
  }
`;

export const Svg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0px 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  height: fit-content;

  @media (min-width: 600px) {
    visibility: hidden;
    margin: 0px 0em;
  }
`;

export const Burger = styled.p`
  background: url(${(props) => props.theme.burger.src});
  visibility: visible;
  background-position: center center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
  :hover {
  }
  @media (min-width: 600px) {
    visibility: hidden;
  }
`;
export const ThemeBtn = styled.p`
  visibility: visible;
  background: url(${(props) => props.theme.btnTheme.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
  :hover {
    background: url(${(props) => props.theme.btnThemeFill.src});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
     @media (min-width: 600px) {
    position:fixed;
    top:-4px;
    right:24px;
  }
`;
