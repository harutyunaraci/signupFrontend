import styled from 'styled-components';

import { text } from '../../common/text';

import { THEME_SIZE, THEME_COLOR } from '../../theme';
import { TextPropsType } from './text.type';

export function PrimaryText(props: TextPropsType) {
  return <Text>{text(props.tid, props.tvalue)}</Text>;
}

const Text = styled.span`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT_PRIMARY};
`;
