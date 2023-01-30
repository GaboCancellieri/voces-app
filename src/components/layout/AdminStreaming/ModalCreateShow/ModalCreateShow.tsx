import React, { useState } from "react";
import styles from "./modalCreateShow.module.scss";
import { Button, Input, Modal, TextArea, Typography } from "ccomponents/index";
import { COLOR_BLACK } from "constants/colors";
import { useShowsService } from "src/api/api";
import { addShow } from "../context/actions";

interface ModalCreateShowProps {
  isActive: boolean;
  onCancel: () => void;
  dispatch: any;
}

const ModalCreateShow = ({
  isActive,
  dispatch,
  onCancel,
}: ModalCreateShowProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const showsService = useShowsService();

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setLink("");
    setImageURL("");
    setIsFeatured(false);
    onCancel();
  };

  const handleSave = async () => {
    const newShow = {
      title,
      description,
      link,
      imageURL,
      isFeatured,
    };
    const savedShow = await showsService.create(newShow);
    dispatch(addShow(savedShow));
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
          Nuevo Show!
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
            Link Youtube
          </Typography>
          <Input
            value={link}
            onChange={(event: any) => setLink(event?.target.value)}
          />
          <Typography color={COLOR_BLACK} size={"20px"}>
            Link Imagen
          </Typography>
          <Input
            value={imageURL}
            onChange={(event: any) => setImageURL(event?.target.value)}
          />
          <Typography color={COLOR_BLACK} size={"20px"}>
            ¿es un estreno?
          </Typography>
        </div>
        <Button
          variant={"success"}
          onClick={handleSave}
          disabled={!title || !description || !link || !imageURL}
        >
          GUARDAR
        </Button>
      </div>
    </Modal>
  );
};

export default ModalCreateShow;
