import { SortPropertyEnum } from 'redux/filter/enum';
import { Sort } from 'redux/filter/types';

export type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export type PopupClick = MouseEvent & {
  path: Node[];
};

export type SortPopupProps = {
  value: Sort;
};
