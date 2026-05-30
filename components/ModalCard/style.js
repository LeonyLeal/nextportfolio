import styled, { keyframes } from "styled-components";

const FadeOut = keyframes`
   0%{
   transform: translate(0, -1em);
   }
   100%{
   transform: translate(0);
   }
   `;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Container = styled.div`
  padding: 32px;
  border-radius: 1em;
  max-width: 90%;
  width: 32em;
  max-height: 85vh;
  min-height: 400px;
  overflow-y: auto;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  background: linear-gradient(
     rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ), ${(props) => props.backColor};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 
  0 8px 32px rgba(0, 0, 0, 0.1),
  inset 0 1px 0 rgba(0, 0, 0, 0.5),
  inset 0 -1px 0 rgba(0, 0, 0, 0.1),
  inset 0 0 8px 4px rgba(0, 0, 0, 0.4);
  @media (min-width: 800px) {
    width: 40em;
  }
`;

export const CloseButton = styled.button`
  background: none;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  float: right;
  :hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;

  > div {
    height: fit-content;
  }
`;

export const ModalContent = styled.div`
  color: white;
  max-width: 34em;
  text-align: center;

  > h2 {
    margin: 1.2em 0 0.8em;
    font-size: 1.8rem;
    line-height: 1.2;
  }

  > p {
    height: fit-content;
    padding: 0;
    margin: 14px;
    font-size: 1.05rem;
    line-height: 1.55;
  }
`;

export const Svg = styled.div`
  margin-top: 2em;
  width: 6em;
  height: 6em;
  border-radius: 100%;
  z-index: 1;
  animation: ${FadeOut} 300ms forwards;
  background: url(${(props) => props.icon}) no-repeat center center, #151515;
  box-shadow: 0px 0px 5px 4px ${(props) => props.shadow};
`;
