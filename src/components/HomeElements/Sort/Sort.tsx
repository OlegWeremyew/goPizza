import React, { FC, memo, useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import { SortItems } from './SortItems';
import { SortLabel } from './SortLabel';
import { PopupClick, SortItem, SortPopupProps } from './types';

import { setSort } from 'redux/filter/slice';

export const Sort: FC<SortPopupProps> = memo(({ value }) => {
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  const onClickListItem = (obj: SortItem): void => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const _event = event as PopupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <SortLabel setOpen={setOpen} open={open} name={value.name} />
      {open && (
        <SortItems onClickListItem={onClickListItem} SortProperty={value.sortProperty} />
      )}
    </div>
  );
});
