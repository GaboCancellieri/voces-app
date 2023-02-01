import React from "react";
import { Button, Icon } from "ccomponents/index";
import { FIT } from "constants/buttons";
import { FLAT_COLOR_ICONS } from "constants/icon";
import styles from "../table.module.scss";
import { TableItemProps } from "../types";

const TableItem = ({ value, columns, onEdit, onDelete }: TableItemProps) => {
  return (
    <>
      {columns.map((col, index) => {
        return (
          <td key={index} className={styles.td}>
            {value[col.prop] === false
              ? "No"
              : value[col.prop] === true
              ? "Si"
              : value[col.prop]}
          </td>
        );
      })}
      {onEdit || onDelete ? (
        <td className={styles.td}>
          {onEdit && (
            <Button onClick={() => onEdit(value)} size={FIT} variant={"blank"}>
              <Icon
                iconId={"FcEditImage"}
                iconDesign={FLAT_COLOR_ICONS}
                size={"2x"}
              />
            </Button>
          )}
          {onDelete && (
            <Button
              onClick={() => onDelete(value)}
              size={FIT}
              variant={"blank"}
            >
              <Icon
                iconId={"FcEmptyTrash"}
                iconDesign={FLAT_COLOR_ICONS}
                size={"2x"}
              />
            </Button>
          )}
        </td>
      ) : null}
    </>
  );
};

export default TableItem;
