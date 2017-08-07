import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';
import PublicGists from '../../components/PublicGists/PublicGists';

class App extends Component {
  render() {
    return (
      <div className={styles.header}>
        <PublicGists />
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
