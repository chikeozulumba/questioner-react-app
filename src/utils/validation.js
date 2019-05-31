import Validator from 'validatorjs';

const stringValidation = 'regex:/^([a-zA-Z0-9,.!? @_-]+)$/';
const nameValidation = 'regex:/^[A-Za-z]|[A-Za-z][A-Za-z]*[A-Za-z]$/';
const phoneValidation = 'regex:/^[a-zA-Z0-9-().s+]{10,15}$/';

export const SignUpValidation = (payload) => {
  const validateFormat = {
    firstName: ['required', nameValidation, 'string', 'min:3', 'max:255'],
    lastName: ['required', nameValidation, 'string', 'min:3', 'max:255'],
    phone: ['required', phoneValidation],
    password: ['required', stringValidation, 'min:6'],
    email: 'required|email',
  };

  const options = {
    'required.firstName': 'First Name field is required',
    'required.lastName': 'Last Name field is required',
    'required.email': 'Email field is required',
    'email.email': 'Email format is invalid',
    'required.phone': 'Phone Number field is required',
    'required.password': 'Password field is required',
  };

  return new Validator(payload, validateFormat, options);
};

export const LoginValidation = (payload) => {
  const validateFormat = {
    password: ['required', stringValidation, 'min:6'],
    email: 'required|email',
  };

  const options = {
    'required.email': 'Email field is required',
    'email.email': 'Email format is invalid',
    'required.password': 'Password field is required',
  };

  return new Validator(payload, validateFormat, options);
};

export default SignUpValidation;
