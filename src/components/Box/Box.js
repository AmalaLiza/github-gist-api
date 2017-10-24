import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './Box.css';

class Box extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const { data } = this.props;

    return <div className={styles.boxWrapper}>
      <div className={styles.box}>
      </div>
      <div className={styles.type}>{data.type}</div>
      <div className={classNames(styles.cost, 'bold')}>{data.cost}</div>
    </div>;
  }
}

Box.propTypes = {
  /**
   * Data to load gist component
   */
};

export default Box;
