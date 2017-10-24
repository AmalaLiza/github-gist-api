import React, { Component } from 'react';
import styles from './SearchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <div className={styles.searchWrapper}>
        <span className={styles.searchIcon}>
        </span>
      </div>
    );
  }
}

SearchBox.propTypes = {};
SearchBox.defaultProps = {};

export default SearchBox;
