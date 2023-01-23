import React from "react";
import classnames from "classnames";
import { ModalProps } from "./types";
import styles from "./modal.module.scss";
import { Button, Typography } from "..";
import { RIGHT } from "constants/alignment";
import { FIT } from "constants/buttons";

const Modal = ({
  children,
  isActive = false,
  width,
  height,
  onCancel,
}: ModalProps) => {
  const handleModalCancel = () => {
    onCancel();
  };

  return (
    <div
      className={classnames(
        styles.modalContainer,
        { [styles.isActive]: isActive },
        { [styles.isVisible]: isActive }
      )}
    >
      <div className={styles.modalContent} style={{ width, height }}>
        <div className={styles.buttonContainer}>
          <Button
            variant="danger"
            align={RIGHT}
            onClick={handleModalCancel}
            size={FIT}
          >
            <Typography>X</Typography>
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
