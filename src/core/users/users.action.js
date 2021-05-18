import { httpRequest } from '../../main/http';
import { USERS_API } from './users.constants';

export async function usersActionLoadUserData() {
  const res = await httpRequest({
    method: USERS_API.USERS_USERSLIST_LOAD.TYPE,
    url: USERS_API.USERS_USERSLIST_LOAD.ENDPOINT,
  });
  return res.data;
}
