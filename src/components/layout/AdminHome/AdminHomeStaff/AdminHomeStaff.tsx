import React, { useEffect, useReducer, useState } from "react";
import { Button, Icon, Table, Typography } from "ccomponents/index";
import styles from "./adminHomeStaff.module.scss";
import { FLAT_COLOR_ICONS } from "constants/icon";
import { FIT } from "constants/buttons";
import { RIGHT } from "constants/alignment";
import { useHomeStaffService } from "src/api/api";
import { staffInitialState, staffReducer } from "./context/reducer";
import {
  deleteStaff,
  setSelectedStaff,
  setStaff,
  toggleStaffCreate,
} from "./context/actions";
import { columns } from "./constants";
import ModalEditStaff from "./ModalEditStaff";
import { IHomeStaff } from "src/api/types";
import { COLOR_PRIMARY } from "constants/colors";

const AdminHomeStaff = () => {
  const staffService = useHomeStaffService();
  const [staffState, dispatchStaff] = useReducer(
    staffReducer,
    staffInitialState
  );

  const handleGetStaff = async () => {
    const result = await staffService.get();
    dispatchStaff(setStaff(result));
  };

  useEffect(() => {
    if (!staffState.staff) {
      handleGetStaff();
    }
  }, []);

  const handleEditStaff = (staff: IHomeStaff) => {
    dispatchStaff(setSelectedStaff(staff));
    dispatchStaff(toggleStaffCreate());
  };

  const handleDeleteStaff = async (staff: IHomeStaff) => {
    const willDelete = confirm("¿Está seguro que quiere eliminar?");
    if (willDelete && staff && staff.id) {
      const deletedStaff = await staffService.delete(staff.id);
      dispatchStaff(deleteStaff(deletedStaff.id));
    }
  };
  console.log(staffState);
  return (
    <>
      <div className={styles.adminHomeStaffContainer}>
        <Button
          variant="blank"
          size={FIT}
          align={RIGHT}
          onClick={() => dispatchStaff(toggleStaffCreate())}
        >
          <Icon iconId={"FcPlus"} iconDesign={FLAT_COLOR_ICONS} />
        </Button>
        {staffState.staff ? (
          <Table
            values={staffState.staff}
            columns={columns}
            onEdit={handleEditStaff}
            onDelete={handleDeleteStaff}
          ></Table>
        ) : (
          <Typography
            color={COLOR_PRIMARY}
            fontFamily="fjallaOne"
            size="20px"
            variant="bold"
          >
            No existe Staff cargado...
          </Typography>
        )}
      </div>
      {staffState.staffCreate && (
        <ModalEditStaff
          isActive={staffState.staffCreate}
          staff={staffState.selectedStaff}
          dispatch={dispatchStaff}
          onCancel={() => dispatchStaff(toggleStaffCreate())}
        />
      )}
    </>
  );
};

export default AdminHomeStaff;
