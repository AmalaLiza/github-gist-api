export const selectStore = state => {
  return ({
    gists: state.gistsApi.get('publicGists'),
    user: state.gistsApi.get('user'),
  });
};