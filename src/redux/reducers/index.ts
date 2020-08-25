import {
  RepositoriesActionTypes,
  GET_REPOSITORIES,
  SET_REPOSITORIES,
  SET_REQUEST_STATUS,
} from '../../core/models/actions';

const initialState = {
  repositories: [],
  status: null,
  pageCount: 0,
  org: ``,
};

const reducer = (state = initialState, action: RepositoriesActionTypes) => {
  switch (action.type) {
    case GET_REPOSITORIES:
      return Object.assign({}, state, {
        org: action.payload.org,
      });

    case SET_REPOSITORIES:
      return Object.assign({}, state, {
        repositories: action.payload.repositories,
        pageCount: action.payload.pageCount || state.pageCount,
      });

    case SET_REQUEST_STATUS:
      return Object.assign({}, state, {
        status: action.payload.status,
      });

    default:
      return state;
  }
};

export default reducer;
