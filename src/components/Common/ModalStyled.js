import styled from "styled-components";
export const ModalStyled = styled.div`
  .modal {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
  }
  .modal.active {
    opacity: 1;
    pointer-events: all;
  }

  .modal__content {
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    transform: scale(1.2);
    transition: 0.4s all;
  }

  .modal__content.active {
    transform: scale(1);
  }
`;
