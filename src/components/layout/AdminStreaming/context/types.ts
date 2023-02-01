import { IShow } from "src/api/types";

export interface IShowState {
  shows: IShow[] | null;
  selectedShow: IShow | null;
  showCreate: boolean;
}
