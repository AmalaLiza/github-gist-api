import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../PublicGists/PublicGists.css';
import { loadAllForks } from '../../actions/action-creator';
import { connect } from 'react-redux';
import { selectStore } from '../selectStore';

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
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(loadAllForks(this.props.gist.get('forks_url'), this.props.gist.get('id')));
  }

  render() {

    const { gist } = this.props;

    return <div className={styles.gist}>
      <div>
        <span className='bold'>Description: </span>
        <span>{gist.get('description')}</span>
      </div>
      <div>
        <span className='bold'>Created At:</span>
        <span> {gist.get('created_at')}</span>
      </div>
      <div>
        <span className='bold'>Gist URL:</span>
        <span> {gist.get('url')}</span>
      </div>
      <div className={styles.gistFooter}>
        <div className={styles.tagWrapper}>
          {gist.get('files').toArray().map((file, index) => {
            if (index < 3) return <span className={styles.tag}>{getTag(file.get('type'))}</span>;
          })}
        </div>
        {gist.get('forks') && gist.get('forks').size ? <div className={styles.forksWrapper}>
          {gist.get('forks').map((fork, index) => <img className={styles.user}
                                                       onClick={() => window.open(fork.getIn(['html_url']))}
                                                       src={fork.getIn(['owner', 'avatar_url'])}>
          </img>)}
        </div> : null}
      </div>
    </div>;
  }
}

Gist.propTypes = {};
Gist.defaultProps = {};

const mapStateToProps = state => selectStore(state);

export default connect(mapStateToProps)(Gist);
