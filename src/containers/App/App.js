import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from '../../components/Box/Box';
import Logo from '../../components/Logo/Logo';
import SearchBox from '../../components/SearchBox/SearchBox';
import SignUp from '../../components/SignIn/SignIn';
import '../../global.css';
import styles from './App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Logo />
          <SearchBox />
        </div>
        <SignUp />
        <div className={styles.boxContainer}>
          <Box data={{ type: 'iPhone 6 Black', cost: '1000 AED' }} />
          <Box data={{ type: 'iPhone 7 Black', cost: '2000 AED' }} />
          <Box data={{ type: 'iPhone 8 Black', cost: '3000 AED' }} />

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(App);