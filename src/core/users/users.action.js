import { httpRequest } from '../../main/http';
import { USERS_API } from './users.constants';
import { USERS_ACTION_TYPE } from './users.type';

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
      const usersData = await res.data

      dispatch({
        type: USERS_ACTION_TYPE.USER_DATA,
        usersData: usersData
      })

      dispatch({
        type: USERS_ACTION_TYPE.USER_LIST_UPLOAD_SUCCESS,
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
