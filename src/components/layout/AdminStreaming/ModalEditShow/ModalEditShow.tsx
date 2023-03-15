import React, { useState } from "react";
import styles from "./modalEditShow.module.scss";
import { Button, Input, Modal, TextArea, Typography } from "ccomponents/index";
import { COLOR_BLACK } from "constants/colors";
import { useShowsService } from "src/api/api";
import { addShow, editShow, setSelectedShow } from "../context/actions";
import { IShow } from "src/api/types";

interface ModalEditShowProps {
  isActive: boolean;
  show?: IShow | null;
  onCancel: () => void;
  dispatch: any;
}

const ModalEditShow = ({
  isActive,
  show = null,
  dispatch,
  onCancel,
}: ModalEditShowProps) => {
  const [title, setTitle] = useState(show?.title ?? "");
  const [description, setDescription] = useState(show?.description ?? "");
  const [link, setLink] = useState(show?.link ?? "");
  const [imageURL, setImageURL] = useState(show?.imageURL ?? "");
  const [isFeatured, setIsFeatured] = useState(false);
  const showsService = useShowsService();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    setIsFeatured((current) => !current);
  };

  console.log("✅ Checkbox is checked");

  console.log(show?.isFeatured);

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setLink("");
    setImageURL("");
    setIsFeatured(false);
    dispatch(setSelectedShow(null));
    onCancel();
  };

  const handleSave = async () => {
    if (show?.id) {
      const newShow = {
        id: show.id,
        title,
        description,
        link,
        imageURL,
        isFeatured,
      };

      const savedShow = await showsService.update(show.id, newShow);

      dispatch(editShow(savedShow));
    } else {
      const newShow = {
        title,
        description,
        link,
        imageURL,
        isFeatured,
      };
      const savedShow = await showsService.create(newShow);
      dispatch(addShow(savedShow));
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
          {show ? "Editar Show!" : "Nuevo Show!"}
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
            ¿Es un estreno?
          </Typography>
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
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

export default ModalEditShow;
