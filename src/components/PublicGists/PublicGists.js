import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPublicGistsOfUser } from '../../actions/action-creator';
import { selectStore } from '../selectStore';
import styles from './PublicGists.css';
import TextField from '../TextField/TextField';
import Gist from '../Gist/Gist';
import UserDetails from '../UserDetails/UserDetails';

class PublicGists extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {

    const { gists, user } = this.props;

    return (
      <div>
        <TextField autoFocus={true}
                   className={styles.searchBox}
                   type='text'
                   onEnter={(value) => this.props.dispatch(loadPublicGistsOfUser(value))}
                   placeholder='Search gists here' />

        {gists.size ? <UserDetails user={user} /> : null}

        <div className={styles.gistCount}>GISTS ({gists.size})</div>

        <div className={styles.gistWrapper}>
          {gists
            .map((gist, index) => <Gist key={gist.get('id')}
                                        gist={gist} />)}

        </div>

      </div>
    );
  }
}

PublicGists.propTypes = {};
PublicGists.defaultProps = {};

const mapStateToProps = state => selectStore(state);

export default connect(mapStateToProps)(PublicGists);
