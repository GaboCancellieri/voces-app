import React, { useState } from "react";
import styles from "./modalEditStaff.module.scss";
import { Button, Input, Modal, TextArea, Typography } from "ccomponents/index";
import { COLOR_BLACK } from "constants/colors";
import { useHomeStaffService } from "src/api/api";
import { addStaff, editStaff, setSelectedStaff } from "../context/actions";
import { IHomeStaff } from "src/api/types";

interface ModalEditStaffProps {
  isActive: boolean;
  staff?: IHomeStaff | null;
  onCancel: () => void;
  dispatch: any;
}

const ModalEditStaff = ({
  isActive,
  staff = null,
  dispatch,
  onCancel,
}: ModalEditStaffProps) => {
  const [title, setTitle] = useState(staff?.title ?? "");
  const [description, setDescription] = useState(staff?.description ?? "");
  const [imageURL, setImageURL] = useState(staff?.imageURL ?? "");
  const staffService = useHomeStaffService();

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setImageURL("");
    dispatch(setSelectedStaff(null));
    onCancel();
  };

  const handleSave = async () => {
    if (staff?.id) {
      const newStaff = {
        id: staff.id,
        title,
        description,

        imageURL,
      };
      const savedStaff = await staffService.update(staff.id, newStaff);
      dispatch(editStaff(savedStaff));
    } else {
      const newStaff = {
        title,
        description,

        imageURL,
      };
      const savedStaff = await staffService.create(newStaff);
      dispatch(addStaff(savedStaff));
    }
    handleCancel();
  };

  return (
    <Modal
      isActive={isActive}
      width={"600px"}
      height={"600px"}
      onCancel={handleCancel}
    >
      <div className={styles.modalCreateContainer}>
        <Typography color={COLOR_BLACK} fontFamily={"fjallaOne"} size={"30px"}>
          {staff ? "Editar Staff!" : "Nuevo Staff"}
        </Typography>
        <div className={styles.modalCreateContent}>
          <Typography color={COLOR_BLACK} size={"20px"}>
            Titulo
          </Typography>
          <Input
            value={title}
            onChange={(event: any) => setTitle(event?.target.value)}
          />
          <Typography color={COLOR_BLACK} size={"20px"}>
            Descripción
          </Typography>
          <TextArea
            value={description}
            onChange={(event: any) => setDescription(event?.target.value)}
          />

          <Typography color={COLOR_BLACK} size={"20px"}>
            Link Imagen
          </Typography>
          <Input
            value={imageURL}
            onChange={(event: any) => setImageURL(event?.target.value)}
          />
        </div>
        <Button
          variant={"success"}
          onClick={handleSave}
          disabled={!title || !description || !imageURL}
        >
          GUARDAR
        </Button>
      </div>
    </Modal>
  );
};

export default ModalEditStaff;
