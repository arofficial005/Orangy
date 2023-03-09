import * as Yup from 'yup';

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(6, 'Password too Short')
    // .matches(
    //   passwordRegExp,
    //   'Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number',
    // ),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
  
});

export const RegisterSchema=Yup.object().shape({
  name:Yup.string().required("Name Required"),
  email: Yup.string().email('Invalid Email').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(8, 'Password too Short'),
  confirmPassword: Yup.string()
  .required('Password Required')
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const ResetPasswordSchema = Yup.object().shape({
  code:Yup.string().required("Code Required"),
  new_password: Yup.string()
    .required('Password Required')
    .min(8, 'Password Too Short'),
  confirm_password: Yup.string()
    .required('Password Required')
    .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
});

export const AddNewProfileSchema = Yup.object().shape({
  // clientType: Yup.string().required('Required'),
  // isPerson: Yup.boolean(),
  // status: Yup.string().required('Required'),
  // reporter: Yup.string().required('Required'),
  firstName: Yup.string()
    .required("Required")
    .matches(/^[aA-zZ\s]+$/, "Special characters !@#$% and number are not allowed *")
    .max(30),
    lastName: Yup.string()
    .required("Required")
    .matches(/^[aA-zZ\s]+$/, "Special characters !@#$% and number are not allowed *")
    .max(30),
  // lastName: Yup.string().when('isPerson', {
  //   is: (isPerson: boolean) => isPerson,
  //   then: Yup.string()
  //     .required("Required")
  //     .matches(/^[aA-zZ\s]+$/, "Special characters !@#$% and number are not allowed *")
  //     .max(30),
  //   otherwise: Yup.string()
  // }),

  // primaryName: Yup.string()
  //   .required("Required")
  //   .matches(/^[aA-zZ\s]+$/, "Special characters !@#$% and number are not allowed *")
  //   .max(60),
  // billingPhone: Yup.string().max(10).required('Required'),
  // // address1: Yup.string().required('Required'),
  // // address2: Yup.string().optional(),
  // suburb: Yup.string()
  //   .required("Required")
  //   .matches(/^[aA-zZ\s]+$/, "Special characters !@#$% and number are not allowed *"),
  // state: Yup.string().required('Required'),
  // postCode: Yup.string()
  //   .required()
  //   .matches(/^[0-9]+$/, "Must be only digits")
  //   .min(4, 'Must be exactly 4 digits')
  //   .max(4, 'Must be exactly 4 digits'),
  // email: Yup.string().required('Required').email('Invalid Email'),
});


