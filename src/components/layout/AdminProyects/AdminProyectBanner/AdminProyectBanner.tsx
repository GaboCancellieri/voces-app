import React, { useEffect, useState } from "react";
import { Button, Input, TextArea, Typography } from "ccomponents/index";
import { useProyectBannerService } from "src/api/api";
import { IProyectBannerInfo } from "src/api/types";
import styles from "./adminProyectBanner.module.scss";
import { COLOR_BLACK } from "constants/colors";
import { LEFT } from "constants/alignment";

const AdminProyectBanner = () => {
  const proyectBannerService = useProyectBannerService();
  const [proyectBannerInfo, setProyectBannerInfo] =
    useState<IProyectBannerInfo | null>(null);

  const handleGet = async () => {
    const result = await proyectBannerService.get();
    setProyectBannerInfo(result);
  };

  useEffect(() => {
    if (!proyectBannerInfo) {
      handleGet();
    }
  }, []);

  const handleChangeTitle = (event: any) => {
    setProyectBannerInfo({
      ...proyectBannerInfo,
      title: event.target.value,
    });
  };

  const handleChangeDescription = (event: any) => {
    setProyectBannerInfo({
      ...proyectBannerInfo,
      description: event.target.value,
    });
  };

  const handleSave = async () => {
    if (proyectBannerInfo?.id) {
      await proyectBannerService.update(
        proyectBannerInfo?.id,
        proyectBannerInfo
      );
    }
  };

  return (
    <div className={styles.adminProyectBannerContainer}>
      <Typography color={COLOR_BLACK}>Titulo</Typography>
      <Input
        value={proyectBannerInfo?.title ?? ""}
        onChange={handleChangeTitle}
      />
      <div className={styles.description}>
        <Typography color={COLOR_BLACK} align={LEFT}>
          Descripción
        </Typography>
        <TextArea
          className={styles.textArea}
          value={proyectBannerInfo?.description ?? ""}
          onChange={handleChangeDescription}
        />
      </div>
      <Button variant={"success"} onClick={handleSave}>
        <Typography>Guardar</Typography>
      </Button>
    </div>
  );
};

export default AdminProyectBanner;
