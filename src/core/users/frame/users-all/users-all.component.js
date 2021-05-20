import React from 'react';
import styled from 'styled-components';

import { text } from '../../../../lib/common/text';
import { THEME_COLOR } from '../../../../lib/theme';

import { ListItem } from '../../../../lib/elements/list-item';
import { ListLayout } from '../../../../lib/elements/layout'

export function UsersAllComponent(props) {
  const { userData } = props;
  return (
    <ListLayout>
      {userData
        ? userData.map((user, index) => (
            <div key={user + index}>
              <ListItem
                user={user}
              />
              {userData[index + 1] && <UsersAllSeparator />}
            </div>
          ))
        : text('STATUS.LOADING')}
    </ListLayout>
  );
}

const UsersAllSeparator = styled.span`
  width: '100%';
  background-color: ${THEME_COLOR.SEPARATOR};
  height: 1px;
`;
