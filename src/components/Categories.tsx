import React from 'react';

import { ReturnComponentType } from '../types';

export const Categories = (): ReturnComponentType => (
  <div className="categories">
    <ul>
      <li className="active">Все</li>
      <li>Мясные</li>
      <li>Вегетарианская</li>
      <li>Гриль</li>
      <li>Острые</li>
      <li>Закрытые</li>
    </ul>
  </div>
);
