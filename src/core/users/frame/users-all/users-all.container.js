import React from 'react';

import { UsersAllLayout } from '../../../../lib/elements/layout';
import { UsersAllComponent } from './users-all.component';
import { PrimaryText } from '../../../../lib/elements/text';

export function UsersAllContainer(props) {
  const { isPending, isError, isSuccess, errorMessage, userData } = props;
  return (
    <UsersAllLayout>
      <PrimaryText tid="USERS.USERS_LIST.HEADER" />
      <UsersAllComponent
        userData={userData}
        isPending={isPending}
        errorMessage={errorMessage}
      />
    </UsersAllLayout>
  );
}

export default UsersAllContainer;
