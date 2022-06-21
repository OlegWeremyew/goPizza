import React from 'react';

import { useSelector } from 'react-redux';

import { selectPizzaData } from '../../../redux/pizza/selectors';
import { PizzaBlock, Skeleton } from '../PizzaBlock';

export const AllPizzas: React.FC = () => {
  const { items, status } = useSelector(selectPizzaData);
  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
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
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
    </>
  );
};
