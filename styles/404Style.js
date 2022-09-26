import styled from "styled-components";

export const NotFoundHeader = styled.h1`
  position: relative;
  z-index: 100;
  text-align: center;
  margin: 15px 5px 0 0 0;
  user-select: none;
  &#warn{
    font-weight: 200;
    font-size: 4rem;
    margin: 0 0;
  }
`;

export const NotFoundButton = styled.a`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  padding: 5px;
  border-radius: 10%;
  margin-top: 10px;
  position: relative;
  z-index: 100;
  user-select: none;
  -webkit-user-drag: none;
`;
