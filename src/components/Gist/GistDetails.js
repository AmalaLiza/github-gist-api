import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gist.css';

const GistDetails = ({ gist, className }) => <div className={className}>
  <div>
    <span className={styles.label}>Description : </span>
    <span
      className={styles.value}>{gist.get('description').length ? gist.get('description') : 'No description provided.'}</span>
  </div>
  <div>
    <span className={styles.label}>Created At :</span>
    <span className={styles.value}> {gist.get('created_at')}</span>
  </div>
  <div>
    <span className={styles.label}>Gist URL :</span>
    <span className={styles.value}> {gist.get('url')}</span>
  </div>
</div>;

export default GistDetails;

GistDetails.propTypes = {

  /**
   * class name for component
   **/
  className: PropTypes.string.isRequired,

  /**
   * gist object
   **/
  gist: PropTypes.object.isRequired,
};