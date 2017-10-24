import React, { Component } from 'react';
import styles from './Button.css';

class Button extends Component {

  render() {
    const { text, disabled, onClick } = this.props;
    return <button className={styles.button}
                   onClick={onClick}
                   title={text}
                   disabled={disabled}>
      {text.length > 0 && text}
    </button>;
  }
}

Button.propTypes = {};
Button.defaultProps = {};

export default Button;
