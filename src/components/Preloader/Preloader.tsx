import React from 'react';

import styles from './Preloader.module.scss';

export const Preloader: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.loader_three} />
  </div>
);
