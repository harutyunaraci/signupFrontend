import { httpRequest } from '../../main/http';
import { USERS_API } from './users.constants';
import { USERS_ACTION_TYPE } from './users.type';

import { performUserDataList } from './users.convert';

export function usersActionLoadUserData() {
  return async (dispatch) => {
    dispatch({
      type: USERS_ACTION_TYPE.USER_LIST_UPLOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: USERS_API.USERS_USERSLIST_LOAD.TYPE,
        url: USERS_API.USERS_USERSLIST_LOAD.ENDPOINT,
      });
      const data = await res.data;

      const usersData = data.map((user) => performUserDataList(user));

      dispatch({
        type: USERS_ACTION_TYPE.USER_LIST_UPLOAD_SUCCESS,
        usersData,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: USERS_ACTION_TYPE.USER_LIST_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
