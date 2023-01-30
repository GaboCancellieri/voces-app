export interface TableProps {
  values: { [key: string]: any }[];
  columns: ITableColumn[];
  onEdit?: () => void;
  onDelete?: () => void;
}

export interface ITableColumn {
  name: string;
  prop: string;
}

export interface TableItemProps {
  value: { [key: string]: any };
  columns: ITableColumn[];
  onEdit?: () => void;
  onDelete?: () => void;
}
