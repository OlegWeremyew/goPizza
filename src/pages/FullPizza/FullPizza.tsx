import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

import styles from './FullPizza.module.scss';

type PizzasType = {
  imageUrl: string;
  title: string;
  price: number;
};

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<PizzasType>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza(): Promise<any> {
      try {
        const { data } = await axios.get(
          `https://626d16545267c14d5677d9c2.mockapi.io/items/${id}`,
        );
        setPizza(data);
      } catch (error) {
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className={styles.container}>
      <img className={styles.pizzaImg} src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to="/">
        <button type="button" className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
