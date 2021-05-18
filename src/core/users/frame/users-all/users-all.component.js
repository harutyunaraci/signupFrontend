import React from 'react';

import styled from 'styled-components';
import { THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';

import { UsersListItem } from '../../../../lib/elements/list-item';

import { spacing } from '../../../../lib/theme';

export function UsersAllComponent(props) {
  const { userData } = props;
  return (
    <Container>
      {userData
        ? userData.map((user, index) => (
            <>
              <UsersListItem
                key={user + index}
                id={user.id}
                login={user.login}
              />
              {userData[index + 1] && <UsersAllSeparator />}
            </>
          ))
        : 'Загрузка'}
    </Container>
  );
}

const UsersAllSeparator = styled.span`
  width: '100%';
  background-color: ${THEME_COLOR.SEPARATOR};
  height: 1px;
`;

const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
