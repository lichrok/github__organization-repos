import { Repository } from '../../core/models/repository';
import {
  GET_REPOSITORIES,
  SET_REPOSITORIES,
  SET_REQUEST_STATUS,
} from '../../core/models/actions';

export const ActionCreator = {
  getRepositories: (org: string, page = 1) => {
    return {
      type: GET_REPOSITORIES,
      payload: {
        org,
        page,
      },
    };
  },

  setRepositories: (repositories: Repository[]) => {
    return {
      type: SET_REPOSITORIES,
      payload: {
        repositories,
      },
    };
  },

  setRequestStatus: (status: string | null) => {
    return {
      type: SET_REQUEST_STATUS,
      payload: {
        status,
      },
    };
  },
};
