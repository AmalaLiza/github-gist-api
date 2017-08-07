import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPublicGistOfUser } from '../../actions/action-creator';
import { selectStore } from '../selectStore';

class PublicGists extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(loadPublicGistOfUser());
  }


  render() {
    return (
      <div>
        <input type='search' />
      </div>
    );
  }
}

PublicGists.propTypes = {};
PublicGists.defaultProps = {};

const mapStateToProps = state => selectStore(state);

export default connect(mapStateToProps)(PublicGists);
