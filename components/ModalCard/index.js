import { Overlay, Container, CloseButton, ModalWrapper, Svg } from "./style";

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
        <CloseButton onClick={onClose}>✖</CloseButton>
        <ModalWrapper>
          <div>
            <Svg
              id="svg"
              icon={icon}
              shadow={shadow}
              shadow_hover={shadow_hover}
            />
          </div>
          <div>
            <p>{children}</p>
          </div>
        </ModalWrapper>
      </Container>
    </Overlay>
  );
}
