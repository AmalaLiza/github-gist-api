import { call, take, cancel, put } from 'redux-saga/effects';
import request from '../request';
import { loadPublicGistsOfUserSuccess, loadPublicGistsOfUserError } from '../actions/action-creator';
import {
  BASE_URL,
  ACTION_LOAD_PUBLIC_GISTS,
} from '../actions/actions-constants';
import { normalizeItems } from '../utils';

/**
 * Makes GET request
 * @returns {*}
 */
export function* loadPublicGistsOfUser(action) {

  try {

    const URL_LOAD_PUBLIC_GISTS = BASE_URL + '/users/' + action.userName + '/gists';
    //let response = yield call(request, URL_LOAD_PUBLIC_GISTS, { method: 'GET' });
    let response = [
        {
          "url": "https://api.github.com/gists/b4f77f4f0d6138f3032baf370928b8bf",
          "forks_url": "https://api.github.com/gists/b4f77f4f0d6138f3032baf370928b8bf/forks",
          "commits_url": "https://api.github.com/gists/b4f77f4f0d6138f3032baf370928b8bf/commits",
          "id": "b4f77f4f0d6138f3032baf370928b8bf",
          "git_pull_url": "https://gist.github.com/b4f77f4f0d6138f3032baf370928b8bf.git",
          "git_push_url": "https://gist.github.com/b4f77f4f0d6138f3032baf370928b8bf.git",
          "html_url": "https://gist.github.com/b4f77f4f0d6138f3032baf370928b8bf",
          "files": {
            ".babelrc": {
              "filename": ".babelrc",
              "type": "text/plain",
              "language": "JSON5",
              "raw_url": "https://gist.githubusercontent.com/vinojv/b4f77f4f0d6138f3032baf370928b8bf/raw/147a02b298ca28d99765c91231b49148afc9db1f/.babelrc",
              "size": 857
            },
            "package.json": {
              "filename": "package.json",
              "type": "application/json",
              "language": "JSON",
              "raw_url": "https://gist.githubusercontent.com/vinojv/b4f77f4f0d6138f3032baf370928b8bf/raw/3460873789366beae586f4c045500bc6152910bd/package.json",
              "size": 2659
            },
            "server.js": {
              "filename": "server.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/b4f77f4f0d6138f3032baf370928b8bf/raw/91442ab2be26e6942c731c78acf1c9818f02d515/server.js",
              "size": 908
            },
            "webpack.dev.config.js": {
              "filename": "webpack.dev.config.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/b4f77f4f0d6138f3032baf370928b8bf/raw/bfaa0120d5fb2853e2bf0d59b2003e233799c76b/webpack.dev.config.js",
              "size": 4911
            },
            "webpack.prod.config.js": {
              "filename": "webpack.prod.config.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/b4f77f4f0d6138f3032baf370928b8bf/raw/2f3938c44f025b0ce04c19f78a0799d9c426cdb6/webpack.prod.config.js",
              "size": 5336
            }
          },
          "public": true,
          "created_at": "2017-05-16T10:43:38Z",
          "updated_at": "2017-05-16T10:43:38Z",
          "description": "Webpack 2 config",
          "comments": 0,
          "user": null,
          "comments_url": "https://api.github.com/gists/b4f77f4f0d6138f3032baf370928b8bf/comments",
          "owner": {
            "login": "vinojv",
            "id": 7531234,
            "avatar_url": "https://avatars0.githubusercontent.com/u/7531234?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vinojv",
            "html_url": "https://github.com/vinojv",
            "followers_url": "https://api.github.com/users/vinojv/followers",
            "following_url": "https://api.github.com/users/vinojv/following{/other_user}",
            "gists_url": "https://api.github.com/users/vinojv/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vinojv/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vinojv/subscriptions",
            "organizations_url": "https://api.github.com/users/vinojv/orgs",
            "repos_url": "https://api.github.com/users/vinojv/repos",
            "events_url": "https://api.github.com/users/vinojv/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vinojv/received_events",
            "type": "User",
            "site_admin": false
          },
          "truncated": false
        },
        {
          "url": "https://api.github.com/gists/4bb2c85ee00f70d260eff2f9ecd1bf98",
          "forks_url": "https://api.github.com/gists/4bb2c85ee00f70d260eff2f9ecd1bf98/forks",
          "commits_url": "https://api.github.com/gists/4bb2c85ee00f70d260eff2f9ecd1bf98/commits",
          "id": "4bb2c85ee00f70d260eff2f9ecd1bf98",
          "git_pull_url": "https://gist.github.com/4bb2c85ee00f70d260eff2f9ecd1bf98.git",
          "git_push_url": "https://gist.github.com/4bb2c85ee00f70d260eff2f9ecd1bf98.git",
          "html_url": "https://gist.github.com/4bb2c85ee00f70d260eff2f9ecd1bf98",
          "files": {
            "....": {
              "filename": "....",
              "type": "text/plain",
              "language": null,
              "raw_url": "https://gist.githubusercontent.com/vinojv/4bb2c85ee00f70d260eff2f9ecd1bf98/raw/59431a3da474106b1c41ebc7109ba30b6a1181af/....",
              "size": 1778
            }
          },
          "public": true,
          "created_at": "2017-03-09T13:13:45Z",
          "updated_at": "2017-03-09T13:13:45Z",
          "description": "",
          "comments": 0,
          "user": null,
          "comments_url": "https://api.github.com/gists/4bb2c85ee00f70d260eff2f9ecd1bf98/comments",
          "owner": {
            "login": "vinojv",
            "id": 7531234,
            "avatar_url": "https://avatars0.githubusercontent.com/u/7531234?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vinojv",
            "html_url": "https://github.com/vinojv",
            "followers_url": "https://api.github.com/users/vinojv/followers",
            "following_url": "https://api.github.com/users/vinojv/following{/other_user}",
            "gists_url": "https://api.github.com/users/vinojv/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vinojv/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vinojv/subscriptions",
            "organizations_url": "https://api.github.com/users/vinojv/orgs",
            "repos_url": "https://api.github.com/users/vinojv/repos",
            "events_url": "https://api.github.com/users/vinojv/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vinojv/received_events",
            "type": "User",
            "site_admin": false
          },
          "truncated": false
        },
        {
          "url": "https://api.github.com/gists/93cc80602284ce4c0b07a203c2090134",
          "forks_url": "https://api.github.com/gists/93cc80602284ce4c0b07a203c2090134/forks",
          "commits_url": "https://api.github.com/gists/93cc80602284ce4c0b07a203c2090134/commits",
          "id": "93cc80602284ce4c0b07a203c2090134",
          "git_pull_url": "https://gist.github.com/93cc80602284ce4c0b07a203c2090134.git",
          "git_push_url": "https://gist.github.com/93cc80602284ce4c0b07a203c2090134.git",
          "html_url": "https://gist.github.com/93cc80602284ce4c0b07a203c2090134",
          "files": {
            "nvm_fix.sh": {
              "filename": "nvm_fix.sh",
              "type": "application/x-sh",
              "language": "Shell",
              "raw_url": "https://gist.githubusercontent.com/vinojv/93cc80602284ce4c0b07a203c2090134/raw/1eaceeef50cf83ce61c11ffcd60603e0b093952f/nvm_fix.sh",
              "size": 639
            }
          },
          "public": true,
          "created_at": "2016-11-22T10:51:46Z",
          "updated_at": "2016-11-22T10:51:46Z",
          "description": "Fix NVM to use from root (or sudo)",
          "comments": 0,
          "user": null,
          "comments_url": "https://api.github.com/gists/93cc80602284ce4c0b07a203c2090134/comments",
          "owner": {
            "login": "vinojv",
            "id": 7531234,
            "avatar_url": "https://avatars0.githubusercontent.com/u/7531234?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vinojv",
            "html_url": "https://github.com/vinojv",
            "followers_url": "https://api.github.com/users/vinojv/followers",
            "following_url": "https://api.github.com/users/vinojv/following{/other_user}",
            "gists_url": "https://api.github.com/users/vinojv/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vinojv/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vinojv/subscriptions",
            "organizations_url": "https://api.github.com/users/vinojv/orgs",
            "repos_url": "https://api.github.com/users/vinojv/repos",
            "events_url": "https://api.github.com/users/vinojv/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vinojv/received_events",
            "type": "User",
            "site_admin": false
          },
          "truncated": false
        },
        {
          "url": "https://api.github.com/gists/e81d9021255c5edb852de3addad1e52d",
          "forks_url": "https://api.github.com/gists/e81d9021255c5edb852de3addad1e52d/forks",
          "commits_url": "https://api.github.com/gists/e81d9021255c5edb852de3addad1e52d/commits",
          "id": "e81d9021255c5edb852de3addad1e52d",
          "git_pull_url": "https://gist.github.com/e81d9021255c5edb852de3addad1e52d.git",
          "git_push_url": "https://gist.github.com/e81d9021255c5edb852de3addad1e52d.git",
          "html_url": "https://gist.github.com/e81d9021255c5edb852de3addad1e52d",
          "files": {
            "arrowFunctionDemo.js": {
              "filename": "arrowFunctionDemo.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/e81d9021255c5edb852de3addad1e52d/raw/80ff43b746f8f9100d3c26f192da347a18f7e801/arrowFunctionDemo.js",
              "size": 277
            }
          },
          "public": true,
          "created_at": "2016-08-11T07:15:31Z",
          "updated_at": "2016-08-11T07:15:31Z",
          "description": "",
          "comments": 0,
          "user": null,
          "comments_url": "https://api.github.com/gists/e81d9021255c5edb852de3addad1e52d/comments",
          "owner": {
            "login": "vinojv",
            "id": 7531234,
            "avatar_url": "https://avatars0.githubusercontent.com/u/7531234?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vinojv",
            "html_url": "https://github.com/vinojv",
            "followers_url": "https://api.github.com/users/vinojv/followers",
            "following_url": "https://api.github.com/users/vinojv/following{/other_user}",
            "gists_url": "https://api.github.com/users/vinojv/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vinojv/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vinojv/subscriptions",
            "organizations_url": "https://api.github.com/users/vinojv/orgs",
            "repos_url": "https://api.github.com/users/vinojv/repos",
            "events_url": "https://api.github.com/users/vinojv/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vinojv/received_events",
            "type": "User",
            "site_admin": false
          },
          "truncated": false
        },
        {
          "url": "https://api.github.com/gists/20e2483a9d4418487fee8168d279d1f5",
          "forks_url": "https://api.github.com/gists/20e2483a9d4418487fee8168d279d1f5/forks",
          "commits_url": "https://api.github.com/gists/20e2483a9d4418487fee8168d279d1f5/commits",
          "id": "20e2483a9d4418487fee8168d279d1f5",
          "git_pull_url": "https://gist.github.com/20e2483a9d4418487fee8168d279d1f5.git",
          "git_push_url": "https://gist.github.com/20e2483a9d4418487fee8168d279d1f5.git",
          "html_url": "https://gist.github.com/20e2483a9d4418487fee8168d279d1f5",
          "files": {
            "allocationSlot.js": {
              "filename": "allocationSlot.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/20e2483a9d4418487fee8168d279d1f5/raw/6b9b822b81eafe6657132992e913c70dbe339102/allocationSlot.js",
              "size": 739
            }
          },
          "public": true,
          "created_at": "2016-08-10T06:06:01Z",
          "updated_at": "2016-08-10T07:12:40Z",
          "description": "This is a slot allocation algorithm for UI. It will assign slot and width for every tasks in a particular day.",
          "comments": 0,
          "user": null,
          "comments_url": "https://api.github.com/gists/20e2483a9d4418487fee8168d279d1f5/comments",
          "owner": {
            "login": "vinojv",
            "id": 7531234,
            "avatar_url": "https://avatars0.githubusercontent.com/u/7531234?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vinojv",
            "html_url": "https://github.com/vinojv",
            "followers_url": "https://api.github.com/users/vinojv/followers",
            "following_url": "https://api.github.com/users/vinojv/following{/other_user}",
            "gists_url": "https://api.github.com/users/vinojv/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vinojv/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vinojv/subscriptions",
            "organizations_url": "https://api.github.com/users/vinojv/orgs",
            "repos_url": "https://api.github.com/users/vinojv/repos",
            "events_url": "https://api.github.com/users/vinojv/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vinojv/received_events",
            "type": "User",
            "site_admin": false
          },
          "truncated": false
        },
        {
          "url": "https://api.github.com/gists/8b16ae636d0fad147f82",
          "forks_url": "https://api.github.com/gists/8b16ae636d0fad147f82/forks",
          "commits_url": "https://api.github.com/gists/8b16ae636d0fad147f82/commits",
          "id": "8b16ae636d0fad147f82",
          "git_pull_url": "https://gist.github.com/8b16ae636d0fad147f82.git",
          "git_push_url": "https://gist.github.com/8b16ae636d0fad147f82.git",
          "html_url": "https://gist.github.com/8b16ae636d0fad147f82",
          "files": {
            "tagGen.js": {
              "filename": "tagGen.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/8b16ae636d0fad147f82/raw/2d6d522e29cd131e6db2784baadb8e5c808f1d89/tagGen.js",
              "size": 422
            }
          },
          "public": true,
          "created_at": "2015-10-26T22:01:43Z",
          "updated_at": "2015-10-26T22:03:44Z",
          "description": "",
          "comments": 0,
          "user": null,
          "comments_url": "https://api.github.com/gists/8b16ae636d0fad147f82/comments",
          "owner": {
            "login": "vinojv",
            "id": 7531234,
            "avatar_url": "https://avatars0.githubusercontent.com/u/7531234?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vinojv",
            "html_url": "https://github.com/vinojv",
            "followers_url": "https://api.github.com/users/vinojv/followers",
            "following_url": "https://api.github.com/users/vinojv/following{/other_user}",
            "gists_url": "https://api.github.com/users/vinojv/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vinojv/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vinojv/subscriptions",
            "organizations_url": "https://api.github.com/users/vinojv/orgs",
            "repos_url": "https://api.github.com/users/vinojv/repos",
            "events_url": "https://api.github.com/users/vinojv/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vinojv/received_events",
            "type": "User",
            "site_admin": false
          },
          "truncated": false
        },
        {
          "url": "https://api.github.com/gists/4f7c2fc5658d3cfed850",
          "forks_url": "https://api.github.com/gists/4f7c2fc5658d3cfed850/forks",
          "commits_url": "https://api.github.com/gists/4f7c2fc5658d3cfed850/commits",
          "id": "4f7c2fc5658d3cfed850",
          "git_pull_url": "https://gist.github.com/4f7c2fc5658d3cfed850.git",
          "git_push_url": "https://gist.github.com/4f7c2fc5658d3cfed850.git",
          "html_url": "https://gist.github.com/4f7c2fc5658d3cfed850",
          "files": {
            "Ancestor.js": {
              "filename": "Ancestor.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/4f7c2fc5658d3cfed850/raw/986bdf04fc444ce6f2599d5a101545d3574febf4/Ancestor.js",
              "size": 602
            },
            "Organisation.js": {
              "filename": "Organisation.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/4f7c2fc5658d3cfed850/raw/1ebaea9eac59094499647e98c93955e3b68dd64c/Organisation.js",
              "size": 392
            },
            "Vector.js": {
              "filename": "Vector.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/4f7c2fc5658d3cfed850/raw/6bd42e067a73f63a976af44d9088196e4fed1ac8/Vector.js",
              "size": 325
            },
            "exercise ": {
              "filename": "exercise ",
              "type": "text/plain",
              "language": null,
              "raw_url": "https://gist.githubusercontent.com/vinojv/4f7c2fc5658d3cfed850/raw/64ded5595ac61513b27e2ba3670d3f3790445ca8/exercise%20",
              "size": 425
            },
            "mean and variance.js": {
              "filename": "mean and variance.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/4f7c2fc5658d3cfed850/raw/756464566af176802222226406c83e8aee82d0de/mean%20and%20variance.js",
              "size": 76
            },
            "sort by multiple properties": {
              "filename": "sort by multiple properties",
              "type": "text/plain",
              "language": null,
              "raw_url": "https://gist.githubusercontent.com/vinojv/4f7c2fc5658d3cfed850/raw/0cff6a9c2649d7acd6ac9e3bf9d12d7b7a92afee/sort%20by%20multiple%20properties",
              "size": 482
            },
            "validate.js": {
              "filename": "validate.js",
              "type": "application/javascript",
              "language": "JavaScript",
              "raw_url": "https://gist.githubusercontent.com/vinojv/4f7c2fc5658d3cfed850/raw/f2e865c238c33ef5cbf095f86c44c4fd10b9eee4/validate.js",
              "size": 626
            }
          },
          "public": true,
          "created_at": "2015-09-29T09:16:47Z",
          "updated_at": "2017-01-07T04:02:24Z",
          "description": "",
          "comments": 0,
          "user": null,
          "comments_url": "https://api.github.com/gists/4f7c2fc5658d3cfed850/comments",
          "owner": {
            "login": "vinojv",
            "id": 7531234,
            "avatar_url": "https://avatars0.githubusercontent.com/u/7531234?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vinojv",
            "html_url": "https://github.com/vinojv",
            "followers_url": "https://api.github.com/users/vinojv/followers",
            "following_url": "https://api.github.com/users/vinojv/following{/other_user}",
            "gists_url": "https://api.github.com/users/vinojv/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vinojv/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vinojv/subscriptions",
            "organizations_url": "https://api.github.com/users/vinojv/orgs",
            "repos_url": "https://api.github.com/users/vinojv/repos",
            "events_url": "https://api.github.com/users/vinojv/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vinojv/received_events",
            "type": "User",
            "site_admin": false
          },
          "truncated": false
        }
      ];

    if (response.length === 0)
      yield put(loadPublicGistsOfUserError('No Gists Found'));
    else
      yield put(loadPublicGistsOfUserSuccess(normalizeItems(response, 'id'), response[0].owner));

  } catch (error) {
    yield put(loadPublicGistsOfUserError(error));
  }
}

/**
 * Manages watcher lifecycle
 */
export default function* loadPublicGistsOfUserSaga() {
  while (true) {
    const action = yield take(ACTION_LOAD_PUBLIC_GISTS);
    yield call(loadPublicGistsOfUser, action);
  }
}