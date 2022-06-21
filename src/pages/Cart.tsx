import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  CartItem,
  CartEmpty,
  EmptyCartButton,
  CartTitle,
  CartFooter,
} from '../components';
import { selectCart } from '../redux/cart/selectors';
import { clearItems } from '../redux/cart/slice';

const Cart: React.FC = () => {
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
      <div className="cart">
        <div className="cart__top">
          <CartTitle />
          <EmptyCartButton onClickClear={onClickClear} />
        </div>
        <div className="content__items">
          {items.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;
