import React from 'react';

import { UsersAllLayout } from '../../../../lib/elements/layout';
import { UsersAllComponent } from './users-all.component';
import { PrimaryText } from '../../../../lib/elements/text';

export function UsersAllContainer(props) {
  console.log(props);
  return (
    <UsersAllLayout>
      <PrimaryText tid="USERS.USERS_LIST.HEADER" />
      <UsersAllComponent userData={props.userData} />
    </UsersAllLayout>
  );
}

export default UsersAllContainer;
