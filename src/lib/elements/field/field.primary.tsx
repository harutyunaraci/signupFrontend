import styled from 'styled-components';
import React from 'react';

import { TextSecondary } from '../text';
import { PrimaryInput } from '../input'

import { spacing } from '../../theme';
import { FieldPrimaryPropsType } from './field.type';

import { THEME_COLOR, THEME_SIZE } from '../../theme'

import { text } from '../../common/text';

export function FieldPrimary(props: FieldPrimaryPropsType) {
  const {
    titleTid,
    placeholderTid,
    name,
    onChange,
    onBlur,
    value,
    error,
  } = props;

  return (
    <Container>
      <Title tid={titleTid} />
      <PrimaryInput
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={text(placeholderTid)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}

const Title = styled(TextSecondary)`
  margin-bottom: ${spacing(1.5)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.span`
  color: ${THEME_COLOR.INPUT_ERROR};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
