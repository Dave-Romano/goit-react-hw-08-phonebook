import { ModalStyled } from "./ModalStyled";

const Modal = ({ active, setActive, children }) => {
  return (
    <ModalStyled>
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div
          className="modal__content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button
            onClick={() => {
              setActive(false);
            }}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </ModalStyled>
  );
};

export default Modal;
