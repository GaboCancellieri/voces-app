import { IHomeNews } from "src/api/types";

export interface INewsState {
  news: IHomeNews[] | null;
  selectedNews: IHomeNews | null;
  newsCreate: boolean;
}
