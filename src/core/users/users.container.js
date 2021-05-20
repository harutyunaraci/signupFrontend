import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usersActionLoadUserData } from './users.action';

import { USERS_STORE_NAME } from './users.constants';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { UsersAllContainer } from './frame/users-all';


import { getRequestData } from '../../main/store/store.service';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function UsersContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersActionLoadUserData());
  }, []);

  const { state } = useSelector((state) => ({
    state: state[USERS_STORE_NAME],
    // pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  console.log(isRequestPending(state.signupForm));
  return (
    <UsersAllContainer
      userData={getRequestData(state.usersList, [])}
      isPending={isRequestPending(state.signupForm)}
      errorMessage={getRequestErrorMessage(state.signupForm)}
    />
  );
}
