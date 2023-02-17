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

export interface IProyectBannerInfo {
  id?: string;
  title?: string;
  description?: string;
}

export interface IProyectAreas {
  id?: string;
  title?: string;
  description?: string;
  imageURL: string;
}

export interface IActivitiesCards {
  id?: string;
  title?: string;
  description?: string;
  imageURL: string;
}

export interface IHomeNews {
  id?: string;
  imageURL: string;
  description?: string;
}
