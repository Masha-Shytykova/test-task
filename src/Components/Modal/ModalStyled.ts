import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(24, 28, 39, 0.25);
  z-index: 1200;

  .modal {
    position: relative;
    overflow-x: auto;
    height: 100%;
    width: 530px;
    padding: 60px 20px;
    background-color: #fff;
    transform: translateX(100%);

    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover .modal,
  &:focus .modal {
    transform: translateX(0);
  }

  .closeBtn {
    position: absolute;
    right: 20px;
    top: 60px;
    border: none;
    background-color: transparent;
  }
`;
