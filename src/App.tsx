import React from 'react';

import './scss/app.scss';

import pizzasList from './assets/pizzas.json';
import { Categories, Header, PizzaBlock, Sort } from './components';
import { ReturnComponentType } from './types';

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

const App = (): ReturnComponentType => {
  const lists: listType[] = pizzasList;

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {lists.map(list => (
                <PizzaBlock {...list} key={list.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
