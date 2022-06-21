import React from 'react';

import Loadable from 'react-loadable';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './scss/app.scss';
import { MainLayout } from './layouts';

const Cart = Loadable({
  loader: () => import('./pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

const FullPizza = React.lazy(() => import('./pages/FullPizza/FullPizza'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="pizza/:id" element={<FullPizza />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
