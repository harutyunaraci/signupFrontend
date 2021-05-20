import React from 'react';
import styled from 'styled-components';

import { THEME_COLOR } from '../../../../lib/theme';

import { ListItem } from '../../../../lib/elements/list-item';
import { ListLayout } from '../../../../lib/elements/layout';
import { CommonError } from '../../../../lib/elements/error';
import { CommonLoader } from '../../../../lib/elements/loader';

export function UsersAllComponent(props) {
  const { isPending, errorMessage, userData } = props;
  return (
    <>
      {userData && (
        <ListLayout>
          {userData.map((user, index) => (
            <div key={user + index}>
              <ListItem user={user} />
              {userData[index + 1] && <UsersAllSeparator />}
            </div>
          ))}
        </ListLayout>
      )}
      {isPending && <Loader width={17} height={17} />}
      {errorMessage && <CommonError tid={'ERROR.' + errorMessage} />}
    </>
  );
}

const UsersAllSeparator = styled.span`
  width: '100%';
  background-color: ${THEME_COLOR.SEPARATOR};
  height: 1px;
`;

const Loader = styled(CommonLoader)`
  display: flex;
  justify-content: center;
`;
