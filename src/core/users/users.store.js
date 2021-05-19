import { USERS_ACTION_TYPE } from './users.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  usersList: initRequestState(),
  users: null,
};

export function usersStore(state = initialState, action) {
  switch (action.type) {
    case USERS_ACTION_TYPE.USER_LIST_UPLOAD_PENDING:
      return {
        ...state,
        usersList: setRequestPending(state.usersList),
      };

    case USERS_ACTION_TYPE.USER_LIST_UPLOAD_SUCCESS:
      return {
        ...state,
        usersList: setRequestSuccess(state.usersList),
      };

    case USERS_ACTION_TYPE.USER_LIST_UPLOAD_ERROR:
      return {
        ...state,
        usersList: setRequestError(state.usersList, action.errorMessage),
      };
    case USERS_ACTION_TYPE.USER_DATA:
      return {
        ...state,
        users: action.usersData,
      };

    default:
      return state;
  }
}