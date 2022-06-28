import { SortItem } from 'components/HomeElements/Sort/types';
import { SortPropertyEnum } from 'redux/filter/enum';

export type SortItemsPropsType = {
  onClickListItem: (obj: SortItem) => void;
  SortProperty: SortPropertyEnum;
};
