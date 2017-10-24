import classNames from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/action-creator';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import styles from './SignIn.css';

class SignIn extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      error_username: false,
      error_password: false,
      usernameActive: false,
      passwordActive: false,
      username: '',
      password: '',
    };
    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validate() {
    if (this.state.username.length === 0) {
      this.setState({
        error_username: true,
      });
    }
    if (this.state.password.length === 0) {
      this.setState({
        error_password: true,
      });
      return;
    }
    this.props.dispatch(signIn(this.state.username, this.state.password));
  }

  handleChange(key, value) {
    this.setState({ [key]: value });
    if (this.state['error_' + key])
      this.setState({ ['error_' + key]: false });

  }

  render() {

    const { usernameActive, passwordActive, error_username, error_password } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.h1}>Sign In Now</div>
        <div className={styles.h2}>Unlock awesome features!</div>
        <div>
          <div className={styles.messageWrapper}>
            <span className={classNames(styles.label, 'bold', { 'opacity': !usernameActive })}>Username</span>
            {error_username && <span className={styles.errorMessage}>Required Field</span>}
          </div>
          <TextField className={classNames(styles.input, { [styles.error]: error_username })}
                     onChange={(value) => this.handleChange('username', value)}
                     onClick={() => this.setState({ usernameActive: true })}
                     onBlur={() => this.setState({ usernameActive: false })}
                     placeholder={'Username'} />

        </div>
        <div>
          <div className={styles.messageWrapper}>
            <span className={classNames(styles.label, 'bold', { 'opacity': !passwordActive })}>Password</span>
            {error_password && <span className={styles.errorMessage}>Required Field</span>}
          </div>
          <TextField className={classNames(styles.input, { [styles.error]: error_password })}
                     onChange={(value) => this.handleChange('password', value)}
                     onClick={() => this.setState({ passwordActive: true })}
                     onBlur={() => this.setState({ passwordActive: false })}
                     placeholder={'Password'} />
        </div>
        <div className={styles.footer}>
          <div className={classNames(styles.confirmation)}>
            <TextField type='checkbox'
                       className={styles.checkBox} />
            <span className={styles.text}>Keep me logged in</span>
          </div>
          <div className={classNames('fright', styles.forgot)}>
            <span>Forgot password?</span>
          </div>
        </div>
        <div>
          <Button text={'Sign In'}
                  onClick={this.validate} />
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {};
SignIn.defaultProps = {};

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(SignIn);
