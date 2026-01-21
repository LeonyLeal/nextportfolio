import React from "react";
import { Container, Circle, Svg, Description } from "./style";

function Card(props) {
  const {wave ,icon, shadow, card_fill, shadow_hover,children, ...rest} = props;

  return (
    <Container wave={wave} shadow_hover={shadow_hover} id="card" {...rest} >
      <Circle card_fill={card_fill} id="background" />
      <Svg
        id="svg"
        icon={icon}
        shadow={shadow}
        shadow_hover={shadow_hover}
      />
      <Description id="description">{children}</Description>
    </Container>
  );
}

export default Card;
