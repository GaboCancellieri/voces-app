import React, { useEffect, useReducer, useState } from "react";
import { Button, Icon, Table, Typography } from "ccomponents/index";
import styles from "./adminProyectAreas.module.scss";
import { FLAT_COLOR_ICONS } from "constants/icon";
import { FIT } from "constants/buttons";
import { RIGHT } from "constants/alignment";
import { useProyectAreasService } from "src/api/api";
import { areasInitialState, areasReducer } from "./context/reducer";
import {
  deleteArea,
  setSelectedArea,
  setAreas,
  toggleAreaCreate,
} from "./context/actions";
import { columns } from "./constants";
import ModalEditArea from "./ModalEditArea";
import { IProyectAreas } from "src/api/types";
import { COLOR_PRIMARY } from "constants/colors";

const AdminProyectAreas = () => {
  const areasService = useProyectAreasService();
  const [areasState, dispatchAreas] = useReducer(
    areasReducer,
    areasInitialState
  );

  const handleGetAreas = async () => {
    const result = await areasService.get();
    dispatchAreas(setAreas(result));
  };

  useEffect(() => {
    if (!areasState.areas) {
      handleGetAreas();
    }
  }, []);

  const handleEditArea = (area: IProyectAreas) => {
    dispatchAreas(setSelectedArea(area));
    dispatchAreas(toggleAreaCreate());
  };

  const handleDeleteArea = async (area: IProyectAreas) => {
    const willDelete = confirm("¿Está seguro que quiere eliminar?");
    if (willDelete && area && area.id) {
      const deletedArea = await areasService.delete(area.id);
      dispatchAreas(deleteArea(deletedArea.id));
    }
  };
  console.log(areasState);
  return (
    <>
      <div className={styles.adminAreasContainer}>
        <Button
          variant="blank"
          size={FIT}
          align={RIGHT}
          onClick={() => dispatchAreas(toggleAreaCreate())}
        >
          <Icon iconId={"FcPlus"} iconDesign={FLAT_COLOR_ICONS} />
        </Button>
        {areasState.areas ? (
          <Table
            values={areasState.areas}
            columns={columns}
            onEdit={handleEditArea}
            onDelete={handleDeleteArea}
          ></Table>
        ) : (
          <Typography
            color={COLOR_PRIMARY}
            fontFamily="fjallaOne"
            size="20px"
            variant="bold"
          >
            No existen areas cargadas...
          </Typography>
        )}
      </div>
      {areasState.areaCreate && (
        <ModalEditArea
          isActive={areasState.areaCreate}
          area={areasState.selectedArea}
          dispatch={dispatchAreas}
          onCancel={() => dispatchAreas(toggleAreaCreate())}
        />
      )}
    </>
  );
};

export default AdminProyectAreas;
