import React, { useEffect, useReducer, useState } from "react";
import { Button, Icon, Table, Typography } from "ccomponents/index";
import styles from "./adminActivities.module.scss";
import { FLAT_COLOR_ICONS } from "constants/icon";
import { FIT } from "constants/buttons";
import { RIGHT } from "constants/alignment";
import { useActivitiesCardsService } from "src/api/api";
import { activitiesInitialState, activitiesReducer } from "./context/reducer";
import {
  deleteActivitie,
  setSelectedActivitie,
  setActivities,
  toggleActivitieCreate,
} from "./context/actions";
import { columns } from "./constants";
import ModalEditActivitie from "./ModalEditActivitie";
import { IActivitiesCards } from "src/api/types";
import { COLOR_PRIMARY } from "constants/colors";

const AdminActivitiesCards = () => {
  const activitiesService = useActivitiesCardsService();
  const [activitiesState, dispatchActivities] = useReducer(
    activitiesReducer,
    activitiesInitialState
  );

  const handleGetActivities = async () => {
    const result = await activitiesService.get();
    dispatchActivities(setActivities(result));
  };

  useEffect(() => {
    if (!activitiesState.activities) {
      handleGetActivities();
    }
  }, []);

  const handleEditActivitie = (activitie: IActivitiesCards) => {
    dispatchActivities(setSelectedActivitie(activitie));
    dispatchActivities(toggleActivitieCreate());
  };

  const handleDeleteActivitie = async (activitie: IActivitiesCards) => {
    const willDelete = confirm("¿Está seguro que quiere eliminar?");
    if (willDelete && activitie && activitie.id) {
      const deletedActivitie = await activitiesService.delete(activitie.id);
      dispatchActivities(deleteActivitie(deletedActivitie.id));
    }
  };
  console.log(activitiesState);
  return (
    <>
      <div className={styles.adminActivitiesCardsContainer}>
        <Button
          variant="blank"
          size={FIT}
          align={RIGHT}
          onClick={() => dispatchActivities(toggleActivitieCreate())}
        >
          <Icon iconId={"FcPlus"} iconDesign={FLAT_COLOR_ICONS} />
        </Button>
        {activitiesState.activities ? (
          <Table
            values={activitiesState.activities}
            columns={columns}
            onEdit={handleEditActivitie}
            onDelete={handleDeleteActivitie}
          ></Table>
        ) : (
          <Typography
            color={COLOR_PRIMARY}
            fontFamily="fjallaOne"
            size="20px"
            variant="bold"
          >
            No existen actividades cargadas...
          </Typography>
        )}
      </div>
      {activitiesState.activitieCreate && (
        <ModalEditActivitie
          isActive={activitiesState.activitieCreate}
          activitie={activitiesState.selectedActivitie}
          dispatch={dispatchActivities}
          onCancel={() => dispatchActivities(toggleActivitieCreate())}
        />
      )}
    </>
  );
};

export default AdminActivitiesCards;
