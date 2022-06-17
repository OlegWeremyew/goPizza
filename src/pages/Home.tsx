import React, { useEffect, useState } from 'react';

import { Categories, PizzaBlock, Sort } from '../components';
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

const Home = (): ReturnComponentType => {
  const [items, setItems] = useState<listType[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://626d16545267c14d5677d9c2.mockapi.io/items')
      .then(res => res.json())
      .then(json => {
        setItems(json);
        setIsLoader(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoader
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map(list => <PizzaBlock {...list} key={list.id} />)}
      </div>
    </>
  );
};

export default Home;
