import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorPopup from '../../components/ErrorPopup/ErrorPopup';
import PublicGists from '../../components/PublicGists/PublicGists';
import { getError } from '../../components/PublicGists/gists.selector';
import { hideError } from '../../actions/action-creator';
import '../../global.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.hideError = this.hideError.bind(this);
  }

  hideError() {
    this.props.dispatch(hideError());
  }

  render() {

    return (
      <div>
        <PublicGists />
        {this.props.error ? <ErrorPopup error={this.props.error}
                                        hideError={this.hideError} /> : null}
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

const mapStateToProps = state => getError(state);

export default connect(mapStateToProps)(App);