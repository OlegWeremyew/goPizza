import React, { FC } from 'react';

import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem, CartEmpty, EmptyCartButton, CartTitle, CartFooter } from 'components';
import { selectCart } from 'redux/cart/selectors';
import { clearItems } from 'redux/cart/slice';
import { CartItemType } from 'redux/cart/types';

const Cart: FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const onClickClear = (): void => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="container container--cart">
      <Helmet>
        <title>Your Cart</title>
        <meta
          name="description"
          content="on this page you can make order and edit order"
        />
      </Helmet>
      <div className="cart">
        <div className="cart__top">
          <CartTitle />
          <EmptyCartButton onClickClear={onClickClear} />
        </div>
        <div className="content__items">
          {items.map((item: CartItemType) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;
