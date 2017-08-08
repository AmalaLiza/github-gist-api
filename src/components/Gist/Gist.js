import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GistDetails from './GistDetails';
import Avatar from '../Avatar/Avatar';
import Tag from '../Tag/Tag';
import { loadAllForks } from '../../actions/action-creator';
import { selectGists } from '../PublicGists/gists.selector';
import styles from './Gist.css';

/**
 * Function to get tag from file type
 * @param type
 * @return string
 * if file type is plain/text, tag will be TEXT
 * if file type is application/javascript, tag will be JAVASCRIPT
 * if file type is application/python, tag will be PYTHON
 **/

const getTag = (type) => {
  if (type && type.split('/')[1] === 'plain')
    return 'text';
  else
    return type[1];
};

class Gist extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {

    //To dispatch action to load all forks of each gists.
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
            if (index < 3) return <Tag key={index}
                                       value={getTag(file.get('type'))}>
            </Tag>;
          })}

        </div>

        {gist.get('forks') && gist.get('forks').size ? <div className={styles.forksWrapper}>

          {gist.get('forks').map((fork, index) => <Avatar key={index}
                                                          className={styles.user}
                                                          onClick={() => window.open(fork.getIn(['html_url']))}
                                                          src={fork.getIn(['owner', 'avatar_url'])}>
          </Avatar>)}

        </div> : null}

      </div>
    </div>;
  }
}

Gist.propTypes = {
  /**
   * Data to load gist component
   */
  gist: PropTypes.object.isRequired,
};

const mapStateToProps = state => selectGists(state);

export default connect(mapStateToProps)(Gist);
