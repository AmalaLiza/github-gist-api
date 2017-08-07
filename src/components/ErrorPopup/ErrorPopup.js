import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorPopup.css';

export default class ErrorPopup extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    window.setTimeout(this.props.hideError, 2000);
  }

  render() {

    const { error } = this.props;

    return (
      <div className={styles.wrapper}>
        <span className={styles.error}>{error}</span>
      </div>
    );
  }
}

ErrorPopup.propTypes = {
  /**
   * class name for wrapper
   */
  wrapperClass: PropTypes.string,
};