import styled from 'styled-components';

import { spacing } from '../../../lib/theme';

import { THEME_SIZE, THEME_COLOR } from '../../theme';
import { UsersListPropsType } from './type.list-item';

export function UsersListItem(props: UsersListPropsType) {
  return (
    <UserItemLayout>
      <UserDataLayout>
        <UserId>{`ID: ${props.id}`}</UserId>
        <UserLogin>{props.login}</UserLogin>
      </UserDataLayout>
    </UserItemLayout>
  );
}

const UserId = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT_SECONDARY};
`

const UserLogin = styled.span`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT_PRIMARY};
`

const UserItemLayout = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;

const UserDataLayout = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;
