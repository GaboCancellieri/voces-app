import Button from "ccomponents/Button";
import React, { useState } from "react";
import styles from "./modal.module.scss";

const Modal = ({ children }: any) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <Button onClick={toggleModal} variant="info" size="normal">
        DETALLES
      </Button>

      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modal_content}>
            {children}

            <button className={styles.close_modal} onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
