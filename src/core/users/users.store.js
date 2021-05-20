import { USERS_ACTION_TYPE } from './users.type';
import { USERS_USERSLIST_STORE_NAME } from './users.constants'
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  usersList: initRequestState(),
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
        usersList: setRequestSuccess(state.usersList, action.usersData),
      };

    case USERS_ACTION_TYPE.USER_LIST_UPLOAD_ERROR:
      return {
        ...state,
        usersList: setRequestError(state.usersList, action.errorMessage),
      };

    default:
      return state;
  }
}