import React from "react";
import { TableProps } from "./types";
import styles from "./table.module.scss";
import TableItem from "./TableItem";

const Table = ({ values, columns, onEdit, onDelete }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          {columns.map((col, index) => {
            return (
              <th
                key={index}
                className={styles.th}
                style={{ textTransform: "capitalize" }}
              >
                {col.name}
              </th>
            );
          })}
          {onEdit || onDelete ? <th className={styles.th}>Actions</th> : null}
        </tr>
      </thead>
      <tbody>
        {values.map((value, index) => {
          return (
            <tr key={index} className={styles.tr}>
              <TableItem
                value={value}
                columns={columns}
                onEdit={onEdit}
                onDelete={onDelete}
              ></TableItem>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
