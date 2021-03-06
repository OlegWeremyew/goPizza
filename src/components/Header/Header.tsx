import React, { FC, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { GoCart } from './GoCart';
import { InnerHeader } from './InnerHeader';
import { Search } from './Search';

import { selectCart } from 'redux/cart/selectors';

export const Header: FC = () => {
  const { items } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <InnerHeader />
        </Link>
        {location.pathname !== '/cart' && <Search />}
        <div className="header__cart">
          {location.pathname !== '/cart' && (
            <Link to="/cart" className="button button--cart">
              <GoCart />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
