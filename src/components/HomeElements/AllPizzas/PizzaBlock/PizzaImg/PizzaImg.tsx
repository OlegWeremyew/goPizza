import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { PizzaImgPropsType } from './types';

export const PizzaImg: FC<PizzaImgPropsType> = ({ id, imageUrl, title }) => (
  <Link key={id} to={`/pizza/${id}`}>
    <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
    <h4 className="pizza-block__title">{title}</h4>
  </Link>
);
