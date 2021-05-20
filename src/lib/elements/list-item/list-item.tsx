import styled, { css } from 'styled-components';

import { spacing } from '../../theme';

import { THEME_SIZE, THEME_COLOR } from '../../theme';
import { LIST_ITEM_DATATYPE, LIST_ITEM_FIELD_NAME } from './type.list-item';

//GET DATA FIELD NAME DEPENDING ON USER'S DATA TYPE
export function ListItem({ user }) {
  const getListItemFieldName = (datatype: string) => {
    switch (datatype) {
      case LIST_ITEM_DATATYPE.ID:
        return LIST_ITEM_FIELD_NAME[LIST_ITEM_DATATYPE.ID];

      case LIST_ITEM_DATATYPE.LOGIN:
        return LIST_ITEM_FIELD_NAME[LIST_ITEM_DATATYPE.LOGIN];

      default:
        return LIST_ITEM_FIELD_NAME.DEFAULT;
    }
  };

  return (
    <UserItemLayout>
      <UserDataLayout>
        {Object.entries(user).map((userdata) => (
          <ListItemData datatype={userdata[0]}>
            {getListItemFieldName(userdata[0])
              ? ''.concat(getListItemFieldName(userdata[0]), ' ', userdata[1])
              : userdata[1]}
          </ListItemData>
        ))}
      </UserDataLayout>
    </UserItemLayout>
  );
}

//STYLED COMP FOR EACH DATATYPE
const ListItemData = styled.span`
  ${({ datatype }) => {
    switch (datatype) {
      case LIST_ITEM_DATATYPE.ID:
        return css`
          font-size: ${THEME_SIZE.FONT.SMALL};
          color: ${THEME_COLOR.TEXT_SECONDARY};
        `;
      case LIST_ITEM_DATATYPE.LOGIN:
        return css`
          font-size: ${THEME_SIZE.FONT.SMALL};
          color: ${THEME_COLOR.TEXT_PRIMARY};
        `;

      default:
        return css`
          font-size: ${THEME_SIZE.FONT.SMALL};
          color: ${THEME_COLOR.TEXT_PRIMARY};
        `;
    }
  }};
`;

const UserItemLayout = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;

const UserDataLayout = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;
