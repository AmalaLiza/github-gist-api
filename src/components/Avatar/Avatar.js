import React from 'react';
import styles from './Avatar.css';

export const Avatar = ({ className, onClick, src }) => <img className={`${className} ${styles.avatar}`}
                                                            onClick={onClick}
                                                            src={src}>
</img>;