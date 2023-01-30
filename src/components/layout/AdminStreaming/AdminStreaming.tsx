import React, { useEffect, useReducer, useState } from "react";
import { Button, Icon, Table, Typography } from "ccomponents/index";
import styles from "./adminStreaming.module.scss";
import { FLAT_COLOR_ICONS } from "constants/icon";
import { FIT } from "constants/buttons";
import { RIGHT } from "constants/alignment";
import ModalCreateShow from "./ModalCreateShow";
import { useShowsService } from "src/api/api";
import { showsInitialState, showsReducer } from "./context/reducer";
import { setShows, toggleShowCreate } from "./context/actions";
import { columns } from "./constants";

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

  const handleEditShow = () => {};

  const handleDeleteShow = () => {};

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
      <ModalCreateShow
        isActive={showsState.showCreate}
        dispatch={dispatchShows}
        onCancel={() => dispatchShows(toggleShowCreate())}
      />
    </>
  );
};

export default AdminStreaming;
