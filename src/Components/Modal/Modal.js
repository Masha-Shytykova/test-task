import { useEffect } from "react";
import { createPortal } from "react-dom";
import Svg from "../Svg/Svg";

const modalRoot = document.querySelector("#modal-root");

function Modal({ closeModal, children }) {
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

  function handleKeyDown(e) {
    if (e.code === "Escape") {
      closeModal();
    }
  }

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }

  return createPortal(
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <button
          onClick={onCloseBtnClick}
          type="button"
          aria-label="close-button"
        >
          <Svg icon="#icon-cross" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
