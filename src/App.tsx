import React from 'react';

import './scss/app.scss';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ReturnComponentType } from './types';

const App = (): ReturnComponentType => (
  <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  </div>
);

export default App;
