import React, { FC } from 'react';

import { Helmet } from 'react-helmet';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: FC = () => (
  <div className={styles.root}>
    <Helmet>
      <title>page not found</title>
      <meta
        name="description"
        content="ops...what is wrong. May be check your url path"
      />
    </Helmet>
    <h1>
      <span>😕</span>
      <br />
      Ничего не найдено
    </h1>
    <p className={styles.description}>
      К сожалени данная страница отсутствует в нашем интернет-магазине
    </p>
  </div>
);
