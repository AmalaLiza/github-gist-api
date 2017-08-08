import React from 'react';
import styles from './Gist.css';

export const GistDetails = ({ gist, className }) => <div className={className}>
  <div>
    <span className={`${styles.label} bold`}>Description: </span>
    <span
      className={styles.value}>{gist.get('description').length ? gist.get('description') : 'No description provided.'}</span>
  </div>
  <div>
    <span className={`${styles.label} bold`}>Created At:</span>
    <span className={styles.value}> {gist.get('created_at')}</span>
  </div>
  <div>
    <span className={`${styles.label} bold`}>Gist URL:</span>
    <span className={styles.value}> {gist.get('url')}</span>
  </div>
</div>;