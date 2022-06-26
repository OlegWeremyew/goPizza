import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { selectPizzaData } from '../../../redux/pizza/selectors';
import { Pizza } from '../../../redux/pizza/types';

import { PizzaBlock } from './PizzaBlock';
import { Skeleton } from './Skeleton';

export const AllPizzas: FC = () => {
  const { items, status } = useSelector(selectPizzaData);

  const pizzas = items.map((obj: Pizza) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  const content = status === 'loading' ? skeletons : pizzas;

  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">{content}</div>
      )}
    </>
  );
};
