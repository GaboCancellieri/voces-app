import { IShow } from "src/api/types";

export interface IShowState {
  shows: IShow[] | null;
  showCreate: boolean;
}
