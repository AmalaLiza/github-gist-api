import * as React from 'react';
import PropTypes from 'prop-types';

export default class TextField extends React.Component {

  /* istanbul ignore next */
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    if (this.props.onChange) {
      let value = event.target.value;

      if (this.props.type === 'number')
        value = value ? +value : null;

      this.props.onChange(value);
    }
  }

  handleKeyDown(event) {
    if (event.keyCode === 13 && this.props.onEnter) {
      this.props.onEnter(event.target.value, event);
    } else if (event.keyCode === 27 && this.props.onEsc) {
      this.props.onEsc(event.target.value, event);
    }
  }

  render() {
    const {
      id,
      type,
      className,
      defaultValue,
      value,
    } = this.props;

    return (<input type={type}
                   id={id}
                   ref={ref => this.input = ref}
                   className={className}
                   defaultValue={defaultValue}
                   value={value}
                   onKeyDown={this.handleKeyDown}
                   onChange={this.handleChange}
                   autoFocus={true}
      />
    );
  }
}

TextField.propTypes = {
  /**
   * type email/password, default is text
   */
  type: PropTypes.string,
  /**
   * Class name for the component
   */
  className: PropTypes.string,
  /**
   * Text to be shown when no input is present
   */
  placeHolder: PropTypes.any,
  /**
   * Callback for on input change
   */
  onChange: PropTypes.func,
  /**
   * Callback for on enter
   */
  onEnter: PropTypes.func,
  /**
   * Callback for on Esc key press
   */
  onEsc: PropTypes.func,
  /**
   * Default value of the input field
   */
  defaultValue: PropTypes.any,
};
