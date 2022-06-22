import React from 'react';

import preloader from '../../assets/gif/preloader.gif';

import styles from './Preloader.module.scss';

export const Preloader: React.FC = () => (
  <div className={styles.block}>
    <img className={styles.preloader} src={preloader} alt="preloader" />
  </div>
);
