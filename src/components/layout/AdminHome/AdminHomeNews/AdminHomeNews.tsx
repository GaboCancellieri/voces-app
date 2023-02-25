import React, { useEffect, useReducer, useState } from "react";
import { Button, Icon, Table, Typography } from "ccomponents/index";
import styles from "./adminHomeNews.module.scss";
import { FLAT_COLOR_ICONS } from "constants/icon";
import { FIT } from "constants/buttons";
import { RIGHT } from "constants/alignment";
import { useHomeNewsService } from "src/api/api";
import { newsInitialState, newsReducer } from "./context/reducer";
import {
  deleteNews,
  setSelectedNews,
  setNews,
  toggleNewsCreate,
} from "./context/actions";
import { columns } from "./constants";
import ModalEditNews from "./ModalEditNews";
import { IHomeNews } from "src/api/types";
import { COLOR_PRIMARY } from "constants/colors";

const AdminHomeNews = () => {
  const newsService = useHomeNewsService();
  const [newsState, dispatchNews] = useReducer(newsReducer, newsInitialState);

  const handleGetNews = async () => {
    const result = await newsService.get();
    dispatchNews(setNews(result));
  };

  useEffect(() => {
    if (!newsState.news) {
      handleGetNews();
    }
  }, []);

  const handleEditNews = (news: IHomeNews) => {
    dispatchNews(setSelectedNews(news));
    dispatchNews(toggleNewsCreate());
  };

  const handleDeleteNews = async (news: IHomeNews) => {
    const willDelete = confirm("¿Está seguro que quiere eliminar?");
    if (willDelete && news && news.id) {
      const deletedNews = await newsService.delete(news.id);
      dispatchNews(deleteNews(deletedNews.id));
    }
  };
  console.log(newsState);
  return (
    <>
      <div className={styles.adminHomeNewsContainer}>
        <Button
          variant="blank"
          size={FIT}
          align={RIGHT}
          onClick={() => dispatchNews(toggleNewsCreate())}
        >
          <Icon iconId={"FcPlus"} iconDesign={FLAT_COLOR_ICONS} />
        </Button>
        {newsState.news ? (
          <Table
            values={newsState.news}
            columns={columns}
            onEdit={handleEditNews}
            onDelete={handleDeleteNews}
          ></Table>
        ) : (
          <Typography
            color={COLOR_PRIMARY}
            fontFamily="fjallaOne"
            size="20px"
            variant="bold"
          >
            No existen Novedades cargadas...
          </Typography>
        )}
      </div>
      {newsState.newsCreate && (
        <ModalEditNews
          isActive={newsState.newsCreate}
          news={newsState.selectedNews}
          dispatch={dispatchNews}
          onCancel={() => dispatchNews(toggleNewsCreate())}
        />
      )}
    </>
  );
};

export default AdminHomeNews;
