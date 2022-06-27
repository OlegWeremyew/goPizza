import React, { FC } from 'react';

import logoSvg from 'assets/img/pizza.png';

export const InnerHeader: FC = () => (
  <div className="header__logo">
    <img width="38" src={logoSvg} alt="Pizza logo" />
    <div>
      <h1>Go Pizza</h1>
      <p>самая вкусная пицца</p>
    </div>
  </div>
);
