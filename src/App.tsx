import React from 'react';

import './scss/app.scss';

import { Categories, Header, PizzaBlock, Sort } from './components';
import { ReturnComponentType } from './types';

const App = (): ReturnComponentType => (
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
            <PizzaBlock title="dfd" price={200} />
            <PizzaBlock title="ваппарап" price={400} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
