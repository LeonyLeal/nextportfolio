import {
  Overlay,
  Container,
  CloseButton,
  ModalWrapper,
  ModalContent,
  Svg,
} from "./style";

export default function Modal({
  isOpen,
  onClose,
  children,
  backColor,
  icon,
  shadow,
  shadow_hover,
}) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()} backColor={backColor}>
        <CloseButton onClick={onClose} aria-label="Fechar modal">
          &times;
        </CloseButton>
        <ModalWrapper>
          <div>
            <Svg
              id="svg"
              icon={icon}
              shadow={shadow}
              shadow_hover={shadow_hover}
            />
          </div>
          <ModalContent>{children}</ModalContent>
        </ModalWrapper>
      </Container>
    </Overlay>
  );
}
