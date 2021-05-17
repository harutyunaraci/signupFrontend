import styled from 'styled-components';
import React from 'react';

import { TextSecondary } from '../text';
import { PrimaryInput } from '../input';
import { ErrorMessage } from '../error'

import { spacing } from '../../theme';
import { FieldPrimaryPropsType } from './field.type';

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
      {error && (
        <InputError error={error} />
      )}
    </Container>
  );
}

const Title = styled(TextSecondary)`
  margin-bottom: ${spacing(1)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputError = styled(ErrorMessage)`
  margin-top: ${spacing(1)};
`