import React, { Component } from 'react';
import { GistDetails } from './GistDetails';
import { Avatar } from '../Avatar/Avatar';
import { Tag } from '../Tag/Tag';
import { connect } from 'react-redux';
import { loadAllForks } from '../../actions/action-creator';
import { selectGists } from '../PublicGists/gists.selector';
import styles from './Gist.css';

const getTag = (type) => {
  type = type.split('/');
  if (type[1] === 'plain')
    return 'text';
  else
    return type[1];
};

class Gist extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    console.log(this.props.gist.get('forks_url'));
    this.props.dispatch(loadAllForks(this.props.gist.get('forks_url'), this.props.gist.get('id')));
  }

  render() {

    const { gist } = this.props;

    return <div className={styles.gist}>

      <GistDetails className={styles.detailsContainer}
                   gist={gist} />

      <div className={styles.gistFooter}>
        <div className={styles.tagWrapper}>

          {gist.get('files').toArray().map((file, index) => {
            if (index < 3) return <Tag value={getTag(file.get('type'))}>
            </Tag>;
          })}

        </div>

        {gist.get('forks') && gist.get('forks').size ? <div className={styles.forksWrapper}>

          {gist.get('forks').map((fork, index) => <Avatar className={styles.user}
                                                          onClick={() => window.open(fork.getIn(['html_url']))}
                                                          src={fork.getIn(['owner', 'avatar_url'])}>
          </Avatar>)}

        </div> : null}

      </div>
    </div>;
  }
}

Gist.propTypes = {};
Gist.defaultProps = {};

const mapStateToProps = state => selectGists(state);

export default connect(mapStateToProps)(Gist);
