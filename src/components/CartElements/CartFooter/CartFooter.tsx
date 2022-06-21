import React from 'react';

import { OrderDetails } from './OrderDetails';
import { ReturnButton } from './ReturnButton';

export const CartFooter: React.FC = () => (
  <div className="cart__bottom">
    <OrderDetails />
    <div className="cart__bottom-buttons">
      <ReturnButton />
      <div className="button pay-btn">
        <span>Оплатить сейчас</span>
      </div>
    </div>
  </div>
);
