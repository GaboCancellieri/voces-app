import React, { useState } from "react";
import styles from "./modalEditShow.module.scss";
import { Button, Input, Modal, TextArea, Typography } from "ccomponents/index";
import { COLOR_BLACK } from "constants/colors";
import { useProyectAreasService } from "src/api/api";
import { addArea, editArea, setSelectedArea } from "../context/actions";
import { IProyectAreas } from "src/api/types";

interface ModalEditAreaProps {
  isActive: boolean;
  area?: IProyectAreas | null;
  onCancel: () => void;
  dispatch: any;
}

const ModalEditArea = ({
  isActive,
  area = null,
  dispatch,
  onCancel,
}: ModalEditAreaProps) => {
  const [title, setTitle] = useState(area?.title ?? "");
  const [description, setDescription] = useState(area?.description ?? "");
  const [imageURL, setImageURL] = useState(area?.imageURL ?? "");
  const areasService = useProyectAreasService();

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setImageURL("");
    dispatch(setSelectedArea(null));
    onCancel();
  };

  const handleSave = async () => {
    if (area?.id) {
      const newArea = {
        id: area.id,
        title,
        description,

        imageURL,
      };
      const savedArea = await areasService.update(area.id, newArea);
      dispatch(editArea(savedArea));
    } else {
      const newArea = {
        title,
        description,

        imageURL,
      };
      const savedArea = await areasService.create(newArea);
      dispatch(addArea(savedArea));
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
          {area ? "Editar Area!" : "Nueva Area"}
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

export default ModalEditArea;
