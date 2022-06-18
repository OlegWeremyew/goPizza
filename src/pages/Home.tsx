import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';

import { Categories, PizzaBlock, Sort } from '../components';
import Pagination from '../components/Pagination';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
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

const Home = ({ searchValue }: any): ReturnComponentType => {
  const [items, setItems] = useState<listType[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortType, setSortType] = useState<ListType>({
    name: 'популярности (DESC)',
    sortProperty: 'rating',
  });

  const pizzas = items.map(list => <PizzaBlock {...list} key={list.id} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

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
        <Categories value={categoryId} onChangeCategory={setCategoryId} />
        <Sort value={sortType} onChangeSort={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoader ? skeletons : pizzas}</div>
      <Pagination onChangePage={setCurrentPage} />
    </div>
  );
};

export default Home;
