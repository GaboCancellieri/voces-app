import React, { useState } from "react";
import styles from "./modalEditActivitie.module.scss";
import { Button, Input, Modal, TextArea, Typography } from "ccomponents/index";
import { COLOR_BLACK } from "constants/colors";
import { useActivitiesCardsService } from "src/api/api";
import {
  addActivitie,
  editActivitie,
  setSelectedActivitie,
} from "../context/actions";
import { IActivitiesCards } from "src/api/types";

interface ModalEditActivitiesProps {
  isActive: boolean;
  activitie?: IActivitiesCards | null;
  onCancel: () => void;
  dispatch: any;
}

const ModalEditActivitie = ({
  isActive,
  activitie,
  dispatch,
  onCancel,
}: ModalEditActivitiesProps) => {
  const [title, setTitle] = useState(activitie?.title ?? "");
  const [description, setDescription] = useState(activitie?.description ?? "");
  const [imageURL, setImageURL] = useState(activitie?.imageURL ?? "");
  const activitiesService = useActivitiesCardsService();

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setImageURL("");
    dispatch(setSelectedActivitie(null));
    onCancel();
  };

  const handleSave = async () => {
    if (activitie?.id) {
      const newActivitie = {
        id: activitie.id,
        title,
        description,

        imageURL,
      };
      const savedActivitie = await activitiesService.update(
        activitie.id,
        newActivitie
      );
      dispatch(editActivitie(savedActivitie));
    } else {
      const newActivitie = {
        title,
        description,

        imageURL,
      };
      const savedActivitie = await activitiesService.create(newActivitie);
      dispatch(addActivitie(savedActivitie));
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
          {activitie ? "Editar Actividad!" : "Nueva Actividad!"}
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

export default ModalEditActivitie;
