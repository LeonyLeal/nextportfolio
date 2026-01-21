import React from "react";
import { Container, Title, Description, Preview, Album } from "./style";

function Apps(props) {
  const insTitle = props.title;
  const insPreview = props.preview;

  return (
    <Container>
      <Title>{insTitle}</Title>
      <Description>{props.children}</Description>
    </Container>
  );
}

export default Apps;
