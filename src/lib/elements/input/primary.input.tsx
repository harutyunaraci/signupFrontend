import styled from 'styled-components';
import { InputCommonPropsType } from './type.input';
import { THEME_COLOR } from '../../theme';
import { THEME_SIZE } from '../../theme/theme.size';
import { spacing } from '../../theme';

export function PrimaryInput(props: InputCommonPropsType) {
  const { onChange, onBlur, value, name, placeholder } = props;
  return (
    <Input
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      placeholder={placeholder}
    />
  );
}

const Input = styled.input`
  background: ${THEME_COLOR.INPUT.BACKGROUND_COLOR};
  border-radius: ${THEME_SIZE.RADIUS.FIELD};
  padding: ${spacing(3)};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
