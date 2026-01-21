import { useRef, useState } from "react";
import { palette, Title } from "../../styles/GlobalStyles";
import Card from "../../components/Card";
import Modal from "../../components/ModalCard";

import { CardWrapper, SkillsContainer, Slide, SlideButton } from "./style";

import cardRedSVG from "../../public/img/cards/card_red.svg";
import cardGreenSVG from "../../public/img/cards/card_green.svg";
import cardBlueSVG from "../../public/img/cards/card_blue.svg";
import cardPurpleSVG from "../../public/img/cards/card_purple.svg";
import htmlSVG from "../../public/img/cards/html.svg";
import designSVG from "../../public/img/cards/design.svg";
import starsSVG from "../../public/img/cards/stars.svg";
import frameworksSVG from "../../public/img/cards/frameworks.svg";

function Skills() {
  const [isModalCodeOpen, setIsModalCodeOpen] = useState(false);
  const [isModalDevopsOpen, setIsModalDevopsOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const slideRef = useRef(Function);

  const previous = () => {
    if (slideRef.current.scrollLeft < 18) {
      return (slideRef.current.scrollLeft += 945);
    }
    return (slideRef.current.scrollLeft -= 200);
  };

  const next = () => {
    if (slideRef.current.scrollLeft >= 650) {
      return (slideRef.current.scrollLeft -= 945);
    }
    return (slideRef.current.scrollLeft += 200);
  };

  return (
    <SkillsContainer id="Section-C">
      <Title>Skills</Title>
      <Slide>
        <SlideButton onClick={() => previous()} id="previous">
          &#60;
        </SlideButton>
        <SlideButton onClick={() => next()} id="next">
          &#62;
        </SlideButton>
        <CardWrapper ref={slideRef} id="slides">
          <Card
            wave={cardRedSVG.src}
            card_fill={palette.cards.background.red}
            icon={htmlSVG.src}
            shadow={palette.cards.border.red}
            shadow_hover={palette.cards.border.selectedRed}
            onClick={() => setIsModalCodeOpen(true)}
          >
          </Card>
          <Card
            wave={cardGreenSVG.src}
            card_fill={palette.cards.background.green}
            icon={designSVG.src}
            shadow={palette.cards.border.green}
            shadow_hover={palette.cards.border.selectedGreen}
            onClick={() => setIsModalDevopsOpen(true)}
          >
            {}
          </Card>
          <Card
            wave={cardBlueSVG.src}
            icon={starsSVG.src}
            card_fill={palette.cards.background.blue}
            shadow={palette.cards.border.blue}
            shadow_hover={palette.cards.border.selectedBlue}
            onClick={() => setIsModal2Open(true)}
          >
            {}
          </Card>
          <Card
            wave={cardPurpleSVG.src}
            icon={frameworksSVG.src}
            card_fill={palette.cards.background.purple}
            shadow={palette.cards.border.purple}
            shadow_hover={palette.cards.border.selectedPurple}
            onClick={() => setIsModal3Open(true)}
          >
            {}
          </Card>
        </CardWrapper>
      </Slide>

      <Modal
        isOpen={isModalCodeOpen}
        onClose={() => setIsModalCodeOpen(false)}
        backColor={palette.cards.background.red}
        icon={htmlSVG.src}
        shadow={palette.cards.border.selectedRed}
      >
      </Modal>
      <Modal
        isOpen={isModalDevopsOpen}
        onClose={() => setIsModalDevopsOpen(false)}
        backColor={palette.cards.background.green}
        icon={htmlSVG.src}
        shadow={palette.cards.border.selectedGreen}
      ></Modal>

      <Modal
        isOpen={isModal2Open}
        onClose={() => setIsModal2Open(false)}
        backColor={palette.cards.background.blue}
        icon={htmlSVG.src}
        shadow={palette.cards.border.selectedBlue}
      ></Modal>
      <Modal
        isOpen={isModal3Open}
        onClose={() => setIsModal3Open(false)}
        backColor={palette.cards.background.purple}
        icon={htmlSVG.src}
        shadow={palette.cards.border.selectedPurple}
      ></Modal>
    </SkillsContainer>
  );
}

export default Skills;
