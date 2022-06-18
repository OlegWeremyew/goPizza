import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { SearchContext } from '../App';
import { Categories, PizzaBlock, Sort } from '../components';
import Pagination from '../components/Pagination';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { StateFilterType } from '../redux/filter/types';
import { RootStateType } from '../redux/types';
import { ReturnComponentType } from '../types';

export type listType = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

const Home = (): ReturnComponentType => {
  const { searchValue } = useContext(SearchContext);
  const dispatch = useDispatch();

  const { categoryId, sort, currentPage } = useSelector<RootStateType, StateFilterType>(
    state => state.filter,
  );

  const [items, setItems] = useState<listType[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(true);

  const pizzas = items.map(list => <PizzaBlock {...list} key={list.id} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  const onChangeCategory = (id: number): void => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (currentPage: number): void => {
    dispatch(setCurrentPage(currentPage));
  };

  useEffect(() => {
    setIsLoader(true);

    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://626d16545267c14d5677d9c2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then(res => {
        setItems(res.data);
        setIsLoader(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoader ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
