import * as yup from "yup";
const phoneRegExp = /^09(0[0-9]|1[0-9]|3[0-9]|2[0-9])-?[0-9]{3}-?[0-9]{4}$/;
const userRegex = /^[a-zA-Z]\w+$/;

export const LoginSchema = yup.object().shape({
  // mobile: yup
  //   .string()
  //   .matches(phoneRegExp, "شماره تلفن معتبر نیست")
  //   .length(11, "شماره تلفن باید 11 رقم باشد")
  //   .required("شماره تلفن نمی تواند خالی باشد"),
  mobile: yup.string().required("شماره تلفن نمی تواند خالی باشد"),
  password: yup.string().required("رمز عبور نمی تواند خالی باشد"),
});
export const signupSchema = yup.object().shape({
  // mobile: yup
  //   .string()
  //   .matches(phoneRegExp, "شماره تلفن معتبر نیست")
  //   .length(11, "شماره تلفن باید 11 رقم باشد")
  //   .required("شماره تلفن نمی تواند خالی باشد"),
  mobile: yup.string().required("شماره تلفن نمی تواند خالی باشد"),
  password: yup.string().required("رمز عبور نمی تواند خالی باشد"),
  password_confirmation: yup.string().required("رمز عبور نمی تواند خالی باشد"),
  
});
