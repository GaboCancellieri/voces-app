import React, { useEffect, useState } from "react";
import { Button, Input, TextArea, Typography } from "ccomponents/index";
import { useHomeBannerService } from "src/api/api";
import { IHomeBannerInfo } from "src/api/types";
import styles from "./adminHomeBanner.module.scss";
import { COLOR_BLACK } from "constants/colors";
import { LEFT } from "constants/alignment";

const AdminHomeBanner = () => {
  const homeBannerService = useHomeBannerService();
  const [homeBannerInfo, setHomeBannerInfo] = useState<IHomeBannerInfo | null>(
    null
  );

  const handleGet = async () => {
    const result = await homeBannerService.get();
    setHomeBannerInfo(result);
  };

  useEffect(() => {
    if (!homeBannerInfo) {
      handleGet();
    }
  }, []);

  const handleChangeTitle = (event: any) => {
    setHomeBannerInfo({
      ...homeBannerInfo,
      title: event.target.value,
    });
  };

  const handleChangeDescription = (event: any) => {
    setHomeBannerInfo({
      ...homeBannerInfo,
      description: event.target.value,
    });
  };

  const handleSave = async () => {
    if (homeBannerInfo?.id) {
      await homeBannerService.update(homeBannerInfo?.id, homeBannerInfo);
    }
  };

  return (
    <div className={styles.adminHomeBannerContainer}>
      <Typography color={COLOR_BLACK}>Titulo</Typography>
      <Input value={homeBannerInfo?.title ?? ""} onChange={handleChangeTitle} />
      <div className={styles.description}>
        <Typography color={COLOR_BLACK} align={LEFT}>
          Descripción
        </Typography>
        <TextArea
          className={styles.textArea}
          value={homeBannerInfo?.description ?? ""}
          onChange={handleChangeDescription}
        />
      </div>
      <Button variant={"success"} onClick={handleSave}>
        <Typography>Guardar</Typography>
      </Button>
    </div>
  );
};

export default AdminHomeBanner;
