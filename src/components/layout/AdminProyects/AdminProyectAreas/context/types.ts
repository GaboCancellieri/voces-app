import { IProyectAreas } from "src/api/types";

export interface IAreaState {
  areas: IProyectAreas[] | null;
  selectedArea: IProyectAreas | null;
  areaCreate: boolean;
}
