import { SortItem } from '../../types';

import { SortPropertyEnum } from 'redux/filter/types';

export type SortItemsPropsType = {
  onClickListItem: (obj: SortItem) => void;
  SortProperty: SortPropertyEnum;
};
