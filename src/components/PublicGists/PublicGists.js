import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gist from '../Gist/Gist';
import UserDetails from '../UserDetails/UserDetails';
import TextField from '../TextField/TextField';
import { loadPublicGistsOfUser } from '../../actions/action-creator';
import { selectGists } from './gists.selector';
import styles from './PublicGists.css';

const GistCount = ({ count }) => <div className={`${styles.gistCount} bold`}>GISTS ({count})</div>;

const GistWrapper = ({ className, children }) => <div className={className}>
  {children}
</div>;

const PublicGistsWrapper = ({ children }) => <div>
  {children}
</div>;

class PublicGists extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const { gists, user } = this.props;

    return <PublicGistsWrapper>
      <span className={styles.searchHint}>Search users' gist by typing and hit enter</span>
      <TextField type='text'
                 className={styles.searchBox}
                 onEnter={(value) => this.props.dispatch(loadPublicGistsOfUser(value))} />

      {gists.size ? <UserDetails user={user} /> : null}
      {gists.size ? <GistCount count={gists.size} /> : null}

      <GistWrapper className={styles.gistWrapper}>
        {gists
          .map((gist, index) => <Gist key={gist.get('id')}
                                      gist={gist} />)}

      </GistWrapper>

    </PublicGistsWrapper>;
  }
}

const mapStateToProps = state => selectGists(state);

export default connect(mapStateToProps)(PublicGists);
