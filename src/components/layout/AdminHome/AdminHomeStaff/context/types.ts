import { IHomeStaff } from "src/api/types";

export interface IStaffState {
  staff: IHomeStaff[] | null;
  selectedStaff: IHomeStaff | null;
  staffCreate: boolean;
}
