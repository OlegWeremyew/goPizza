export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export interface StateFilterType {
  categoryId: number;
  currentPage: number;
  sort: SortObjType;
}

export type SortObjType = {
  name: string;
  sortProperty: string;
};
