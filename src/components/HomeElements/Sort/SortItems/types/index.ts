import { SortPropertyEnum } from '../../../../../redux/filter/types';
import { SortItem } from '../../types';

export type SortItemsPropsType = {
  onClickListItem: (obj: SortItem) => void;
  SortProperty: SortPropertyEnum;
};
