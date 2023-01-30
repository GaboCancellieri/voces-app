export interface IHomeBannerInfo {
  id?: string;
  title?: string;
  description?: string;
}

export interface IShow {
  id?: string;
  title?: string;
  description?: string;
  link: string;
  imageURL?: string;
  isFeatured?: boolean;
}
