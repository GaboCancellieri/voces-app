export interface TableProps {
  values: { [key: string]: any }[];
  columns: ITableColumn[];
  onEdit?: (element: any) => void;
  onDelete?: (element: any) => void;
}

export interface ITableColumn {
  name: string;
  prop: string;
}

export interface TableItemProps {
  value: { [key: string]: any };
  columns: ITableColumn[];
  onEdit?: (element: any) => void;
  onDelete?: (element: any) => void;
}
