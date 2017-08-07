import React from 'react';
import styles from './Tag.css';

export const Tag = ({ value }) => <span className={styles.tag}>{value}</span>;