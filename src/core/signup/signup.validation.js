export function signupFormValidation(values) {
  const errors = {};
  if (!values.login) {
    errors.email = 'Required';
  } 
  return errors;
}