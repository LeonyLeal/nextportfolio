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
  height: 47em;
  min-height:400px;
  overflow-y:scroll;
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
  @media (min-width: 1200px) {
  overflow-y:clip;
  }
`;

export const CloseButton = styled.button`
  background: none;
  color: rgba(255,255,255,0.8);
  border: none;
  font-size: 18px;
  cursor: pointer;
  float: right;
  :hover {
    color:rgba(255,255,255,1);
  }
`;

export const ModalWrapper = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
 > div {
  height:fit-content;
  > p {
      height:fit-content;
      padding:0;
      margin:14px;
      text-align:center;
      color:white;
      }
    }
`

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