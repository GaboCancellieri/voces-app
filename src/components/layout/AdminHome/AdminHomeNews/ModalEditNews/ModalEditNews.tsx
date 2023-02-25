import React, { useState } from "react";
import styles from "./modalEditNews.module.scss";
import { Button, Input, Modal, TextArea, Typography } from "ccomponents/index";
import { COLOR_BLACK } from "constants/colors";
import { useHomeNewsService } from "src/api/api";
import { addNews, editNews, setSelectedNews } from "../context/actions";
import { IHomeNews } from "src/api/types";

interface ModalEditNewsProps {
  isActive: boolean;
  news?: IHomeNews | null;
  onCancel: () => void;
  dispatch: any;
}

const ModalEditNews = ({
  isActive,
  news = null,
  dispatch,
  onCancel,
}: ModalEditNewsProps) => {
  const [imageURL, setImageURL] = useState(news?.imageURL ?? "");
  const newsService = useHomeNewsService();

  const handleCancel = () => {
    setImageURL("");
    dispatch(setSelectedNews(null));
    onCancel();
  };

  const handleSave = async () => {
    if (news?.id) {
      const newNews = {
        id: news.id,
        imageURL,
      };
      const savedNews = await newsService.update(news.id, newNews);
      dispatch(editNews(savedNews));
    } else {
      const newNews = {
        imageURL,
      };
      const savedNews = await newsService.create(newNews);
      dispatch(addNews(savedNews));
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
          {news ? "Editar Novedades!" : "Nuevas Novedades"}
        </Typography>
        <div className={styles.modalCreateContent}>
          <Typography color={COLOR_BLACK} size={"20px"}>
            Link Imagen
          </Typography>
          <Input
            value={imageURL}
            onChange={(event: any) => setImageURL(event?.target.value)}
          />
        </div>
        <Button variant={"success"} onClick={handleSave} disabled={!imageURL}>
          GUARDAR
        </Button>
      </div>
    </Modal>
  );
};

export default ModalEditNews;
