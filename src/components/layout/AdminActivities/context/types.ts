import { IActivitiesCards } from "src/api/types";

export interface IActivitieState {
  activities: IActivitiesCards[] | null;
  selectedActivitie: IActivitiesCards | null;
  activitieCreate: boolean;
}
