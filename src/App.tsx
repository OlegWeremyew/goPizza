import React, { createContext, useState } from 'react';

import './scss/app.scss';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ReturnComponentType } from './types';

// @ts-ignore
export const SearchContext = createContext<any>();

const App = (): ReturnComponentType => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="wrapper">
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
