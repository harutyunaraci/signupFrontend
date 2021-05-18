import React from 'react';
import styled from 'styled-components';

import { spacing } from '../../../../lib/theme';

import { UsersAllLayout } from '../../../../lib/elements/layout';
import { UsersAllComponent } from './users-all.component';
import { PrimaryText } from '../../../../lib/elements/text';

export function UsersAllContainer(props) {
  return (
    <UsersAllLayout>
      <PrimaryText tid="USERS.USERS_LIST.HEADER" />
      <UsersAllComponent userData={props.userData} />
    </UsersAllLayout>
  );
}

export default UsersAllContainer;
