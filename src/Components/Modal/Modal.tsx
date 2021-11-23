import { useEffect } from "react";
import { createPortal } from "react-dom";
import Svg from "../Svg/Svg";
import { ModalContainer } from "./ModalStyled";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

type Props = {
  closeModal: () => void;
  children: React.ReactNode;
};

function Modal({ closeModal, children }: Props) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []); /* eslint-disable-line*/

  function onCloseBtnClick() {
    closeModal();
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.code === "Escape") {
      closeModal();
    }
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  return createPortal(
    <ModalContainer onClick={handleBackdropClick}>
      <div className="modal">
        <button
          onClick={onCloseBtnClick}
          type="button"
          aria-label="close-button"
          className="closeBtn"
        >
          <Svg icon="#icon-cross" width="20px" height="20px" />
        </button>
        {children}
      </div>
    </ModalContainer>,
    modalRoot
  );
}

export default Modal;
