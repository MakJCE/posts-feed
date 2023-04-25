import React from 'react';
import styles from './HomeTitle.module.css';

const HomeTitle = ({ title }) => {
  return <h2 className={styles.h2}>{title}</h2>;
};

export default HomeTitle;
