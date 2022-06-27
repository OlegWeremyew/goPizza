import React, { ChangeEvent, FC, useCallback, useRef, useState } from 'react';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import { ClearIcon } from './ClearIcon';
import { MagnifyingGlass } from './MagnifyingGlass';
import styles from './Search.module.scss';

import { EMPTY_STRING } from 'constants/variables';
import { setSearchValue } from 'redux/filter/slice';

export const Search: FC = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>(EMPTY_STRING);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = (): void => {
    dispatch(setSearchValue(EMPTY_STRING));
    setValue(EMPTY_STRING);
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <MagnifyingGlass />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && <ClearIcon onClickClear={onClickClear} />}
    </div>
  );
};
