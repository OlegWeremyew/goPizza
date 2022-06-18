import React, { useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SearchContext } from '../App';
import { Categories, PizzaBlock, Sort } from '../components';
import Pagination from '../components/Pagination';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { setCategoryId } from '../redux/filter/slice';
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

export type ListType = {
  name: string;
  sortProperty: string;
};

const Home = (): ReturnComponentType => {
  const { searchValue } = useContext(SearchContext);

  const categoryId = useSelector<RootStateType, number>(state => state.filter.categoryId);
  const dispatch = useDispatch();

  const [items, setItems] = useState<listType[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(true);
  // const [categoryId, setCategoryId] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortType, setSortType] = useState<ListType>({
    name: 'популярности (DESC)',
    sortProperty: 'rating',
  });

  const pizzas = items.map(list => <PizzaBlock {...list} key={list.id} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  const onChangeCategory = (id: number): void => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoader(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://626d16545267c14d5677d9c2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then(res => res.json())
      .then(json => {
        setItems(json);
        setIsLoader(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoader ? skeletons : pizzas}</div>
      <Pagination onChangePage={setCurrentPage} />
    </div>
  );
};

export default Home;
