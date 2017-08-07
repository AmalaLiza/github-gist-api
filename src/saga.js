import loadPublicGistsOfUser from './sagas/loadPublicGistsOfUser.saga';
import loadForks from './sagas/loadForks.saga';

export default [
  loadPublicGistsOfUser,
  loadForks
];