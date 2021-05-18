import React from 'react';

import styled from 'styled-components';

import { FieldPrimary } from '../../../../lib/elements/field';
import { FieldLayout } from '../../../../lib/elements/layout';
import { PrimaryButton } from '../../../../lib/elements/button';
import { FormLoader } from '../../../../lib/elements/loader';
import { FormError } from '../../../../lib/elements/error';

import { spacing } from '../../../../lib/theme';

export function SignupFormComponent(props) {
  const {
    fieldLogin,
    fieldPassword,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FieldLayout>
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
            name={fieldLogin}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldLogin]}
            error={isFieldError(fieldLogin)}
          />

          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPassword]}
            error={isFieldError(fieldPassword)}
          />
        </FieldLayout>
        <PrimaryButton
          valueTid="SIGNUP.SIGNUP_FORM.BUTTON"
          disabled={isSubmitDisabled()}
        />

        {errorMessage && (
          <FormError tid={'ERROR.SIGNUP_FORM.' + errorMessage} />
        )}
        {pageLoading && <Loader width={17} height={17} />}
        
      </Container>
    </form>
  );
}

const Loader = styled(FormLoader)`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;
