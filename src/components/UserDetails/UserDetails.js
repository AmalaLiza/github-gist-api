import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../PublicGists/PublicGists.css';

class UserDetails extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { user } = this.props;

    return <div className={styles.userDetails}>
      <img className={styles.avatar} src={user.get('avatar_url')}>
      </img>
      <div className={styles.detailsWrapper}>
        <div>
          <span className='bold'>Name: </span>
          <span>{user.get('login')}</span>
        </div>
        <div>
          <span className='bold'>User Url: </span>
          <span>{user.get('url')}</span>
        </div>
        <div>
          <span className='bold'>Gists Url: </span>
          <span>{user.get('gists_url')}</span>
        </div>

      </div>
    </div>;
  }
}

UserDetails.propTypes = {};
UserDetails.defaultProps = {};

export default UserDetails;
