import React, { useEffect, useReducer, useState } from "react";
import { Button, Icon, Table, Typography } from "ccomponents/index";
import styles from "./adminStreaming.module.scss";
import { FLAT_COLOR_ICONS } from "constants/icon";
import { FIT } from "constants/buttons";
import { RIGHT } from "constants/alignment";
import { useShowsService } from "src/api/api";
import { showsInitialState, showsReducer } from "./context/reducer";
import {
  deleteShow,
  setSelectedShow,
  setShows,
  toggleShowCreate,
} from "./context/actions";
import { columns } from "./constants";
import ModalEditShow from "./ModalEditShow";
import { IShow } from "src/api/types";

const AdminStreaming = () => {
  const showsService = useShowsService();
  const [showsState, dispatchShows] = useReducer(
    showsReducer,
    showsInitialState
  );

  const handleGetShows = async () => {
    const result = await showsService.get();
    dispatchShows(setShows(result));
  };

  useEffect(() => {
    if (!showsState.shows) {
      handleGetShows();
    }
  }, []);

  const handleEditShow = (show: IShow) => {
    dispatchShows(setSelectedShow(show));
    dispatchShows(toggleShowCreate());
  };

  const handleDeleteShow = async (show: IShow) => {
    const willDelete = confirm("¿Está seguro que quiere eliminar?");
    if (willDelete && show && show.id) {
      console.log("HOLAAA");
      const deletedShow = await showsService.delete(show.id);
      dispatchShows(deleteShow(deletedShow.id));
    }
  };

  return (
    <>
      <div className={styles.adminStreamingContainer}>
        <Button
          variant="blank"
          size={FIT}
          align={RIGHT}
          onClick={() => dispatchShows(toggleShowCreate())}
        >
          <Icon iconId={"FcPlus"} iconDesign={FLAT_COLOR_ICONS} />
        </Button>
        {showsState.shows ? (
          <Table
            values={showsState.shows}
            columns={columns}
            onEdit={handleEditShow}
            onDelete={handleDeleteShow}
          ></Table>
        ) : (
          <Typography>No existen shows cargados...</Typography>
        )}
      </div>
      {showsState.showCreate && (
        <ModalEditShow
          isActive={showsState.showCreate}
          show={showsState.selectedShow}
          dispatch={dispatchShows}
          onCancel={() => dispatchShows(toggleShowCreate())}
        />
      )}
    </>
  );
};

export default AdminStreaming;
