import styled from 'styled-components';
import { ButtonPrimaryPropsType } from './type.button';
import { THEME_COLOR } from '../../theme';
import { THEME_SIZE } from '../../theme/theme.size';

import { spacing } from '../../theme';

import { text } from '../../common/text';

export function PrimaryButton(props: ButtonPrimaryPropsType) {
  const { valueTid, disabled } = props;
  return <Button disabled={disabled}>{text(valueTid)}</Button>;
}

const Button = styled.button`
  background-color: ${THEME_COLOR.BUTTON.PRIMARY.BACKGROUND_COLOR};
  color: ${THEME_COLOR.BUTTON.PRIMARY.COLOR};
  border-radius: ${THEME_SIZE.RADIUS.BUTTON};
  font-size: ${THEME_SIZE.FONT.SMALL};
  padding: ${spacing(3)};
`;
