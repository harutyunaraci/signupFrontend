import Image from 'next/image';
import styled from 'styled-components';
import { FormErrorPropsType } from './type.error';
import { THEME_COLOR } from '../../theme';
import { THEME_SIZE } from '../../theme/theme.size';
import { spacing } from '../../theme';
import { text } from '../../common/text';

export function FormError(props: FormErrorPropsType) {
  return (
    <Error>
      <Image src="/static/img/error.svg" width={16} height={16} />
      <ErrorText>{text(props.tid, 'Неизвестная ошибка.')}</ErrorText>
    </Error>
  );
}

const ErrorText = styled.span`
  margin-left: ${spacing(2)};
`;

const Error = styled.div`
  display: flex;
  color: ${THEME_COLOR.FORM_ERROR_TEXT};
  background-color: ${THEME_COLOR.FORM_ERROR_BACKGROUND};
  border-radius: ${THEME_SIZE.RADIUS.ERROR};
  padding: ${spacing(3)};
  font-size: ${THEME_SIZE.FONT.SMALL};
  margin-top: ${spacing(4)};
`;
