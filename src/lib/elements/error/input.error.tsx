import styled from 'styled-components';
import { InputErrorPropsType } from './type.error';
import { THEME_COLOR } from '../../theme';
import { THEME_SIZE } from '../../theme/theme.size';
import { spacing } from '../../theme';


export function ErrorMessage(props: InputErrorPropsType) {
  return <Error>{props.error}</Error>;
}

const Error = styled.span`
  color: ${THEME_COLOR.INPUT_ERROR};
  font-size: ${THEME_SIZE.FONT.SMALL};
  margin-top: ${spacing(1)};
`;