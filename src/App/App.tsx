import React, { FC, lazy } from 'react';

import Loadable from 'react-loadable';
import { Routes, Route } from 'react-router-dom';

import '../scss/app.scss';
import { Preloader } from '../components';
import { MainLayout } from '../layouts';

const Cart = Loadable({
  loader: () => import('../pages/Cart'),
  loading: () => <Preloader />,
});

const FullPizza = lazy(() => import('../pages/FullPizza/FullPizza'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Home = lazy(() => import('../pages/Home'));

export const App: FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="pizza/:id" element={<FullPizza />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
