import React, { FC, lazy } from 'react';

import Loadable from 'react-loadable';
import { Routes, Route } from 'react-router-dom';

import 'scss/app.scss';
import { Preloader } from 'components';
import { MainLayout } from 'layouts';

import { Helmet } from 'react-helmet';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ 'pages/Cart'),
  loading: () => <Preloader />,
});

const FullPizza = lazy(
  () => import(/* webpackChunkName: "FullPizza" */ 'pages/FullPizza/FullPizza'),
);
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ 'pages/NotFound'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ 'pages/Home'));

export const App: FC = () => (
  <>
    <Helmet>
      <title>Go Pizza</title>
      <meta
        name="description"
        content="various flavors of pizza on order for your choice"
      />
    </Helmet>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
);
