import styled from 'styled-components';
import { InputErrorPropsType } from './type.error';
import { THEME_COLOR } from '../../theme';
import { THEME_SIZE } from '../../theme/theme.size';

import { text } from '../../common/text';

export function ErrorMessage(props: InputErrorPropsType) {
  const { tid, tidValue } = props;
  return <Error>{text(tid, tidValue)}</Error>;
}

const Error = styled.span`
  color: ${THEME_COLOR.INPUT_ERROR};
  font-size: ${THEME_SIZE.FONT.SMALL};
  margin-top: 5px;
`;